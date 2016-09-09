
import { connect } from 'react-redux';
import { login } from 'reduxApp/modules/auth';

import { LoginForm as LoginFormComponent } from 'components/LoginForm/';

const LoginForm = connect(
    null,
    { login }
)(LoginFormComponent);


export default LoginForm;
