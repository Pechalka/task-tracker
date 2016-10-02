import React from 'react';

import LoginLayout from 'components/Layouts/Login';
import LoginForm from './LoginForm/';
import RegisterForm from './RegisterForm/';

const Login = () => (
    <LoginLayout
      left={<LoginForm />}
      right={<RegisterForm />}
    />
);

export default Login;
