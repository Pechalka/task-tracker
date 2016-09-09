import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

const Main = ({ header, children }) => (
    <div>
        {header}
        <Grid>
            <Row>
                <Col xs={12}>
                    {children}
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Main;
