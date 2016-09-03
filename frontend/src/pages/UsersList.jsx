import React from 'react';

import {
    DashboardMenuContainer,
} from 'containers/ProjectsList';
import { Grid, Row, Col } from 'react-bootstrap';
import { UsersTableContainer } from 'containers/Users';

const UsersList = () => (
    <div>
        <DashboardMenuContainer />
        <Grid>
            <Row>
                <Col xs={12}>
                   <UsersTableContainer />
                </Col>
            </Row>
        </Grid>
    </div>
);

import need from 'utils/need';
import { fetchUsers } from 'reduxApp/modules/users';
export default need(fetchUsers)(UsersList);
