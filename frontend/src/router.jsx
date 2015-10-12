var React = require('react');
var Router = require('react-router');

var { Route, Link, State, Redirect,
	Navigation, RouteHandler, 
	DefaultRoute } = Router;

var Layout = require('pages/layout/index.jsx');
var TaskList = require('pages/taskList/index.jsx');
var TaskAdd = require('pages/taskAdd/index.jsx');
var ProjectsList = require('pages/projectsList/index.jsx');
var UsersList = require('pages/usersList/index.jsx');
var Dashboard = require('pages/dashboard/index.jsx')
var TaskDetails = require('pages/taskDetails/index.jsx');

var App = require('pages/app/index.jsx');

var routes = (
	<Route  path="/">
		<Route handler={App}>
			<Route name="test" handler={require('pages/test/')} path="test" />
			<DefaultRoute handler={ProjectsList} />
			<Route handler={Layout} path="projects/:projectId/">
				<Route name="tasks" handler={TaskList} path="tasks" />
				<Route name="add-tasks" handler={TaskAdd} path="tasks/add" />
				<Route name="task-detail" handler={TaskDetails} path="tasks/:id" />		
			</Route >
			<Route name="projects" handler={ProjectsList} path="projects" />
			<Route name="users" handler={UsersList} path="users" />
		</Route>

		<Route name="login" handler={require('pages/login/index.jsx')} path="login" />
	
	</Route>);


module.exports = {
	run : function(){
		Router.run(routes, function (Handler) { 
			React.render(<Handler />, document.getElementById('app'));
		});
	}
}