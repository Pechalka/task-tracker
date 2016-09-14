var ORM = require('./services/ORM');
var CRUD = require('./services/CRUD');
var config = require('./config.json');


var express = require('express');
var app = express();

app.use(express.static('../frontend/dist'));

var fallback = require('express-history-api-fallback');
var root = __dirname + '/../frontend/dist'

app.use(require('cookie-parser')());
app.use(require('cookie-session')({
    secret: config.secret
}));

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var auth = require('./services/auth');


ORM.init(app, function(e){
	app.use(ORM.middleware);
	
	auth.init(app);


	app.get('/api/session', auth.checkAuth, auth.getCurrent);
	app.delete('/api/session', auth.logout);
	

	app.post('/api/login', auth.login, auth.getCurrent)
	app.post('/api/logout', auth.logout)

	app.use('/api/projects', ORM.REST('projects'))

	app.use('/api/tasks/:task/comments', CRUD.foreignKey('task'), ORM.REST('comments')); 
	

	app.use('/api/tasks', CRUD.query(['status', 'assignee', 'version']), ORM.REST('tasks'))
	app.use('/api/users', ORM.REST('users'))
	app.use('/api/version', ORM.REST('version'))


	// html5 history api
	app.use(fallback('index.html', { root: root }))


	var server = app.listen(7000, function () {
  		var host = server.address().address;
  		var port = server.address().port;

  		console.log('Example app listening at http://%s:%s', host, port);
	});
})
