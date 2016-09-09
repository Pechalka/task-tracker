
import { connect } from 'react-redux';
import { registr } from 'reduxApp/modules/auth';

import { RegisterForm as RegisterFormComponent } from 'components/RegisterForm/';

const RegisterForm = connect(
    null,
    { registr }
)(RegisterFormComponent);

export default RegisterForm;
