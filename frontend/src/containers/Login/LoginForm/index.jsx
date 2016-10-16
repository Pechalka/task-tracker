
import React, { PropTypes } from 'react';

import { Button, Input } from 'react-bootstrap';
import './index.css';


import { observer } from 'mobx-react';

const LoginForm = observer(['auth'], ({ auth: { login } }) => {
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
});

LoginForm.propTypes = {
    login: PropTypes.func,
};

export default LoginForm;
