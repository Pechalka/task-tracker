import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { LoginFormContainer, RegisterFormContainer } from 'containers/Login';

const Login = () => (
    <Grid>
        <Row>
            <Col xsOffset={2} xs={4}>
                <LoginFormContainer />
            </Col>
            <Col xs={4}>
                <RegisterFormContainer />
            </Col>
        </Row>
    </Grid>
);

export default Login;
