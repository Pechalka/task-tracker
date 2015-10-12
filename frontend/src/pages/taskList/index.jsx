var React = require('react');

var http = require('utils/http');

var { Route, Link, State, Redirect,
	Navigation, RouteHandler, 
	DefaultRoute  } = require('react-router');

var { Grid, Button , Label, Table, Input, Pagination} = require('react-bootstrap');

require('./index.css');

var Page = React.createClass({
	mixins : [Navigation, React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			tasks : [] ,
			users : [],
			activePage : 2
		};
	},
	remove : function(state, index){
		var $update = {};
		$update[state] = {
			$splice : [[index, 1]]
		}

		var newState = React.addons.update(this.state, $update)
		this.setState(newState)
	},
	removeTask : function(task, index){
		http.remove('/api/projects/' + this.props.params.projectId + '/tasks/' + task.id)
			.then(() => this.remove('tasks', index))
		
	},
	componentDidMount: function() {
		http.get('/api/projects/' + this.props.params.projectId + '/tasks')
			.then((json) => this.setState({ tasks : json}))

		http.get('/api/users')
			.then((json) => this.setState({ users : json }))	

	},
	rowClick : function(t, e){
		this.transitionTo('task-detail', { id : t.id, projectId : this.props.params.projectId })
	},
	renderTask : function(task, index){
		return <tr onClick={this.rowClick.bind(null, task)} style={{ cursor : 'pointer' }}>
			<td>{task.id}</td>
			<td>{task.title}</td>
			<td>{task.status}</td>
			<td>user {index}</td>
		</tr>
	},
	render: function() {
		var tasks = this.state.tasks.map(this.renderTask)

		var statuses = ['new', 'inprogress', 'close'].map((s) => <option value={s}>{s}</option>);
		var users = this.state.users.map((u) => <option value={u.id}>{u.name}</option>)

		//bsStyle='primary'

		return <Grid>
			<div className="row form-horizontal">
				<div className="col-xs-4">
					<Input labelClassName='col-xs-2' wrapperClassName='col-xs-10' type='select' label='status'>
						{statuses}
					</Input>
				</div>
				<div className="col-xs-4">
					<Input labelClassName='col-xs-2' wrapperClassName='col-xs-10' type='select' label='assign'>
						{users}
					</Input>
				</div>
				<div className="col-xs-2">
					<Button >search</Button>
				</div>
			</div>
			<hr/>
			{/*<div className='form-horizontal'>
					<Input labelClassName='col-xs-2' wrapperClassName='col-xs-10' type='select' label='status'>
						{statuses}
					</Input>
				</div>*/}
			<Table striped bordered condensed hover>
				<thead>
			      	<tr>
			        	<th>#</th>
			        	<th>title</th>
			        	<th>status</th>
			        	<th>assigned</th>
			      	</tr>
				</thead>
				<tbody>
  					{tasks}
				</tbody>
			</Table>
			<div className="text-center">
				{tasks.length > 2 && <Pagination
			        prev
			        next
			        first={false}
			        last={false}
			        ellipsis={false}
			        items={20}
			        bsSize="small"
			        maxButtons={5}
			        activePage={this.state.activePage}
			        onSelect={this.handleSelect} />}
		    </div>
		</Grid>
	},
	handleSelect : function(event, selectedEvent){
		this.setState({ activePage : selectedEvent.eventKey })
	}

});

module.exports = Page;