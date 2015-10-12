var React = require('react');


var { Route, Link, State, Redirect,
	Navigation, RouteHandler, 
	DefaultRoute } = require('react-router');

var http = require('utils/http');


var { Grid, Button, Input } = require('react-bootstrap');

require('./index.css');

var index = React.createClass({
	mixins : [Navigation, React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			title : '' ,
			description : '',
			status : 'new',
			user : null,
			users : []
		};
	},
	componentDidMount: function() {
		http.get('/api/users')
			.then((json) => this.setState({ users : json }))	
	},
	addTask : function(){
		var projectId = this.props.params.projectId;

		var newTask = {
			title : this.state.title,
			description : this.state.description,
			status : this.state.status,
			projectId : projectId
		}
		http.post('/api/projects/' + projectId + '/tasks', newTask)
			.then(() => this.transitionTo('tasks', this.props.params))
	},
	render: function() {
		var statuses = ['new', 'inprogress', 'close'].map((s) => <option value={s}>{s}</option>);
		var users = this.state.users.map((u) => <option value={u.id}>{u.name}</option>)

		return <Grid>
			<form>
				<Input valueLink={this.linkState('title')} type="text" label="title" />
				<Input valueLink={this.linkState('status')} type='select' label='status'>
					{statuses}
				</Input>
				<Input valueLink={this.linkState('user')} type='select' label='assign'>
					{users}
				</Input>
				<Input valueLink={this.linkState('description')} type='textarea' label='description' placeholder='textarea' />
				<div>
					<Button onClick={this.addTask}>add tasl</Button>
				</div>
			</form>
		</Grid>
	}

});

module.exports = index;