import { connect } from 'react-redux';

import React from 'react';

import { Button, Grid, Col, Row } from 'react-bootstrap';

import UserSelect from './UserSelect';
import StatusSelect from './StatusSelect';

const TaskFilter = ({ makeSearch }) => (
    <div>
        <Grid style={{ padding: 0 }} fluid={true}>
            <Row>
                <Col xs={3}>
                    <StatusSelect />
                </Col>
                <Col xs={3} xsOffset={2}>
                    <UserSelect />
                </Col>
            </Row>
        </Grid>
        <div style={{ marginTop: 10 }}>
            <Button onClick={makeSearch}>Find</Button>
        </div>
    </div>
);


import {
    makeSearch,
} from '../state';

export default connect(
    null,
    {
        makeSearch,
    },
)(TaskFilter);

