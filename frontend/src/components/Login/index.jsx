import React from 'react';

const { Button, Input } = require('react-bootstrap');
require('./index.css');

const LinkedStateMixin = require('react-addons-linked-state-mixin');

const LoginForm = React.createClass({
    mixins : [LinkedStateMixin],
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


const RegisterForm = React.createClass({
    mixins : [LinkedStateMixin],
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


export {
    RegisterForm,
    LoginForm,
};
