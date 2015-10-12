var React = require('react');

var { Panel, Button, Grid, Row, Col, Navbar, Nav, NavItem, CollapsibleNav } = require('react-bootstrap');
var { Navigation } = require('react-router');


var { auth } = require('utils/auth');

var menu = React.createClass({
	mixins : [Navigation],
	logOut : function(){
		auth.logout(()=>this.transitionTo('login'));
	},
	render: function() {
		var projectId = this.props.projectId;		
		return <Navbar brand={<a href="#">task-tracker</a>}  inverse toggleNavKey={0}>
				<CollapsibleNav>
		    	<Nav navbar left eventKey={0}> 
		      		{/*<NavItem eventKey={2} href={this.makeHref('projects', this.props.params)}>projects</NavItem>
		      		<NavItem eventKey={3} href={this.makeHref('users', this.props.params)}>users</NavItem>*/}		    	
		    		
		    		{projectId && <NavItem eventKey={2} href={this.makeHref('tasks', { projectId : projectId })}>tasks</NavItem>}
		      		{projectId && <NavItem eventKey={3} href={this.makeHref('add-tasks', { projectId : projectId })}>add task</NavItem>}
				</Nav>
		    	<Nav navbar right>
		    		<NavItem onClick={this.logOut} eventKey={4} >log out</NavItem>
		    	</Nav>
		    	</CollapsibleNav>
		  	</Navbar>
	}

});

module.exports = menu;