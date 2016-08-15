var React = require('react');
var Router = require('react-router');

var { Route, Link, State, Redirect,
	Navigation, RouteHandler, 
	DefaultRoute } = Router;

var Layout = require('pages/layout/index.jsx');
var Dashboard = require('pages/dashboard/index.jsx')
var AddProject = require('pages/addProject/')

var App = require('pages/app/index.jsx');

//add-project
var routes = (
	<Route  path="/">
		<Route name="test" handler={require('pages/test/')} path="test" />
		<Route handler={App}>
<<<<<<< HEAD
			<DefaultRoute handler={Dashboard} name="dashboard" />
			<Route name="add-project" handler={AddProject} path="add-project" />
			<Route name="project-details" handler={require('pages/projectDetails/')} path="projects/:id" />
			<Route name="loginAsSupplire" handler={require('pages/loginAsSupplire/')} path="loginAsSupplire" />
			<Route name="about" handler={require('pages/about/')} path="about" />


=======
			<DefaultRoute handler={ProjectsList} />
			<Route handler={Layout} path="projects/:projectId/">
				<Route name="tasks" handler={TaskList} path="tasks" />
				<Route name="add-tasks" handler={TaskAdd} path="tasks/add" />
				<Route name="task-detail" handler={TaskDetails} path="tasks/:id" />		
			</Route >
			<Route name="projects" handler={ProjectsList} path="projects" />
			<Route name="users" handler={UsersList} path="users" />
>>>>>>> migrate to new stack
		</Route>
		<Route name="test" handler={require('pages/test/')} path="test" />

		<Route name="login" handler={require('pages/login/index.jsx')} path="login" />
	
	</Route>);


module.exports = {
	run : function(){
		Router.run(routes, function (Handler) { 
			React.render(<Handler />, document.getElementById('app'));
		});
	}
}