import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

const NoMatch = () => (
    <div>
        <Grid>
            <Row>
                <Col xs={12}>
                    <h1>404</h1>
                    <div>
                        <Link to='/'>back to app</Link>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default NoMatch;
