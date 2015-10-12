var React = require('react');

var { RouteHandler } = require('react-router');

var { Grid, Button , Label, ListGroup, ListGroupItem, Input, Navbar, Nav, NavItem } = require('react-bootstrap');

var { Authentication } = require('utils/auth');

var App = React.createClass({
	mixins : [Authentication],
	render: function() {
		return <div>
			<RouteHandler />
		</div>
	}

});

module.exports = App;