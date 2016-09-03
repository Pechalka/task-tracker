import React from 'react';

var { Grid, Row, Col, Button , Label, TabbedArea, TabPane, ListGroup, ListGroupItem, Input } = require('react-bootstrap');
var { Navigation } = require('react-router');
var http = require('utils/http');
require('./index.css');

const LinkedStateMixin = require('react-addons-linked-state-mixin');

//var { auth } = require('utils/auth');


let LoginForm = React.createClass({
	mixins : [Navigation, LinkedStateMixin],
	getInitialState: function() {
		return {
			email : 'joe@example.com',
			password : 'password1'
		};
	},
	login : function(){
        this.props.login(this.state);
	},
	render : function(){
		return <form className="login-form">
			<Input valueLink={this.linkState('email')} type="text" label="email" />
			<Input valueLink={this.linkState('password')} type="password" label="password" />
			<Button onClick={this.login} bsStyle="primary">login</Button>
		</form>
	}
});

import { connect } from 'react-redux';
import { login, registr } from 'reduxApp/modules/auth';

LoginForm = connect(
    null,
    { login }
)(LoginForm);


let RegisterForm = React.createClass({
	mixins : [Navigation, LinkedStateMixin],
	getInitialState: function() {
		return {
			email : 'joe@example.com',
			name : 'joe',
			password : 'password1'
		};
	},
	regist : function(){
		this.props.registr(this.state);
	},
	render : function(){
		return <form className="login-form">
			<Input valueLink={this.linkState('email')} type="text" label="email" />
			<Input valueLink={this.linkState('password')} type="password" label="password" />
			<Input valueLink={this.linkState('name')} type="text" label="name" />
			<Button onClick={this.regist} bsStyle="success">regist</Button>
		</form>
	}
})

RegisterForm = connect(
    null,
    { registr }
)(RegisterForm);



var Login = React.createClass({

	render: function() {
		return <Grid>
			<Row>
				<Col xsOffset={2} xs={4}>
					<LoginForm />
				</Col>
                <Col xs={4}>
                    <RegisterForm />
                </Col>
			</Row>
		</Grid>
	}

});


module.exports = Login;
