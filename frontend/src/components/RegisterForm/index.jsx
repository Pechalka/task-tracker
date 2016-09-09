import React, { Component, PropTypes } from 'react';

import { Button, Input } from 'react-bootstrap';
import './index.css';

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
            <form className='register-form'>
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
};
