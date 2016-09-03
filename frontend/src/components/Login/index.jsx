import React, { Component, PropTypes } from 'react';

import { Button, Input } from 'react-bootstrap';
import './index.css';

const LoginForm = ({ login }) => {
    let email;
    let password;
    return (
        <form className='login-form'>
            <Input
              ref={node => { email = node; }}
              defaultValue='joe@example.com'
              type='text'
              label='email'
            />
            <Input
              ref={node => { password = node; }}
              defaultValue='password1'
              type='password'
              label='password'
            />
            <Button
              onClick={() =>
                login({
                    email: email.getValue(),
                    password: password.getValue(),
                })}
              bsStyle='primary'
            >login</Button>
        </form>
    );
};

LoginForm.propTypes = {
    login: PropTypes.func,
};

class RegisterForm extends Component {
    static propTypes = {
        registr: PropTypes.func,
    }

    regist = () => {
        this.props.registr({
            email: this.refs.email.getValue(),
            password: this.refs.password.getValue(),
            name: this.refs.name.getValue(),
        });
    }

    render() {
        return (
            <form className='login-form'>
                <Input ref='email' defaultValue='joe@example.com' type='text' label='email' />
                <Input ref='password' defaultValue='password1' type='password' label='password' />
                <Input ref='name' defaultValue='joe' type='text' label='name' />
                <Button onClick={this.regist} bsStyle='success'>regist</Button>
            </form>
        );
    }
}


export {
    RegisterForm,
    LoginForm,
};
