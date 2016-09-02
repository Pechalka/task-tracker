import React from 'react';
import {
    ProjectsListContainer, ProjectPopupContainer, DashboardMenuContainer,
} from 'containers/ProjectsList';

import { Grid, Row, Col } from 'react-bootstrap';

const ProjectsListPage = () => (
    <div>
        <DashboardMenuContainer />
        <Grid>
            <Row>
                <Col xs={12}>
                    <ProjectsListContainer />
                    <ProjectPopupContainer />
                </Col>
            </Row>
        </Grid>
    </div>
);

import need from 'utils/need';
import { loadProducts } from 'reduxApp/modules/projects';

export default need(loadProducts)(ProjectsListPage);
