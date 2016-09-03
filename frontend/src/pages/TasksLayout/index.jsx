import React from 'react';
import { MenuContainer } from 'containers/Auth';
import { Grid, Col, Row } from 'react-bootstrap';

import TaskAdd from './TaskAdd';
import TaskDetails from './TaskDetails';
import TaskList from './TaskList';

const Layout = ({ header, main }) => (
    <div>
        {header}
        <Grid>
            <Row>
                <Col xs={12}>
                    {main}
                </Col>
            </Row>
        </Grid>
    </div>
);


const TasksLayout = ({ children }) => (
    <Layout
      header={<MenuContainer />}
      main={children}
    />
);


export {
    TasksLayout,
    TaskAdd,
    TaskDetails,
    TaskList,
};
