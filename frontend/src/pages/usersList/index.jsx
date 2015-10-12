var React = require('react');

var { Grid, Button , Label, ListGroup, ListGroupItem, Input } = require('react-bootstrap');

var http = require('utils/http');
var Menu = require('blocks/menu/index.jsx');

var index = React.createClass({
	mixins : [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			email : '',
			password : '',
			name : '',
			users : [] 
		};
	},
	addItem : function(collectionName, item){
		var $update = {};
		$update[collectionName] = {
			$push : [item]
		}
		var newState = React.addons.update(this.state, $update);
		this.setState(newState);
		return item;
	},
	remove : function(state, index){
		var $update = {};
		$update[state] = {
			$splice : [[index, 1]]
		}

		var newState = React.addons.update(this.state, $update)
		this.setState(newState);
		return index;
	},
	add : function(){
		var newUser = {
			email : this.state.email,
			password : this.state.password,
			name : this.state.name			
		}
		http.post('/api/users', newUser)
			.then((json) => this.addItem('users', json))
			.then((json) => this.setState({ title : '' }))
	},
	componentDidMount: function() {
		http.get('/api/users')
			.then((json) => this.setState({ users : json }))
	},
	removeProject : function(p, i){
		http.remove('/api/users/' + p.id)
			.then(() => this.remove('users', i))
	},
	renderUser : function(p, i){
		return <ListGroupItem>
			<div className="clearfix">
				<div className="pull-left">
					<dl className="dl-horizontal">
						<dt>email</dt>
						<dd>{p.email}</dd>
					
						<dt>name</dt>
						<dd>{p.name}</dd>
					</dl>

				</div>
				<div className="pull-right">
					<Button onClick={this.removeProject.bind(null, p, i)} bsStyle='danger' bsSize='xsmall'>remove</Button>
				</div>
			</div>
		</ListGroupItem>
	},
	render: function() {
		var list = this.state.users.map(this.renderUser);

		var form = <form>
			<Input label="email" valueLink={this.linkState('email')} type='text'  />
			<Input label="password" valueLink={this.linkState('password')} type='text'  />
			<Input label="name" valueLink={this.linkState('name')} type='text'  />
			
			<div className="clearfix">
				<div className="pull-right">
					<Button bsStyle="success" onClick={this.add}>add</Button>
				</div>
			</div>
		</form>

		return <div>
			<Menu/>
			<Grid>
				<ListGroup>
					<ListGroupItem>
						{form}
					</ListGroupItem>
				
					{list}

				</ListGroup>
			</Grid>
		</div>
	}

});

module.exports = index;