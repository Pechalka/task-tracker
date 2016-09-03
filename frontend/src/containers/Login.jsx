
import { connect } from 'react-redux';
import { login, registr } from 'reduxApp/modules/auth';

import { LoginForm, RegisterForm } from 'components/Login/';

const LoginFormContainer = connect(
    null,
    { login }
)(LoginForm);

const RegisterFormContainer = connect(
    null,
    { registr }
)(RegisterForm);

export {
    LoginFormContainer,
    RegisterFormContainer,
};
