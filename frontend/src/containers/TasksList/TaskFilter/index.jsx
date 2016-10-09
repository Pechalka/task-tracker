
import React from 'react';

import { Button, Grid, Col, Row } from 'react-bootstrap';

import { UserSelect } from './UserSelect';
import { StatusSelect } from './StatusSelect';

export const TaskFilter = ({
    makeSearch,
    users, userId, changeUserId,
    statuses, status, changeStatus,
}) => (
    <div>
        <Grid style={{ padding: 0 }} fluid={true}>
            <Row>
                <Col xs={3}>
                    <StatusSelect statuses={statuses} status={status} changeStatus={changeStatus} />
                </Col>
                <Col xs={3} xsOffset={2}>
                    <UserSelect users={users} userId={userId} changeUserId={changeUserId} />
                </Col>
            </Row>
        </Grid>
        <div style={{ marginTop: 10 }}>
            <Button onClick={makeSearch}>Find</Button>
        </div>
    </div>
);


