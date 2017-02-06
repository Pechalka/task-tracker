import React, { PropTypes } from 'react';

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
            >login2</Button>
        </form>
    );
};

LoginForm.propTypes = {
    login: PropTypes.func,
};

export {
  LoginForm,
};
