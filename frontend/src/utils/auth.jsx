
var http = require('./http');

var _user = null;

var auth = {
  login: function (email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (_user) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    pretendRequest(email, pass, function (user) {
      _user = user;
        if (cb) cb(!!_user);
        this.onChange(!!_user);
    }.bind(this));
  },
    getUserId : function(){
      if (_user) {
        return _user.id;
      }

      return null;
    },
  getUser: function () {
    return _user;
  },

  logout: function (cb) {
   // delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn: function (cb) {
    http.get('/api/session')
        .then((user) => cb(user))
        .fail(() => cb(false))
  },

  onChange: function () {}
};

function pretendRequest(email, pass, cb) {
    http.post('/api/login', { email : email, password : pass })
        .then(cb)
        .fail(() => cb(null))
}

var Authentication = {
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            auth.loggedIn(function(user){
                _user = user;
                
                if (!_user) transition.redirect('/login');

                callback();
            })
        }
    }
};

module.exports = {
	Authentication : Authentication,
	auth : auth
}
