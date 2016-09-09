import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Login = ({ left, right }) => (
    <Grid>
        <Row>
            <Col xsOffset={2} xs={4}>
                {left}
            </Col>
            <Col xs={4}>
                {right}
            </Col>
        </Row>
    </Grid>
);

export default Login;
