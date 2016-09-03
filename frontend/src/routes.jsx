import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import Login from 'pages/Login/';

import ProjectsList from 'pages/ProjectsList/';
import TaskList from 'pages/TaskList/';
import TaskAdd from 'pages/TaskAdd/';
import TaskDetails from 'pages/TaskDetails/';
import { requireAuthentication, MenuContainer } from 'containers/Auth';
import { Grid, Col, Row } from 'react-bootstrap';
import UsersList from 'pages/UsersList';
import NoMatch from 'pages/NoMatch';

const TasksLayout = ({ children }) => (
    <div>
        <MenuContainer />
        <Grid>
            <Row>
                <Col xs={12}>
                    {children}
                </Col>
            </Row>
        </Grid>
    </div>
);

const App = ({ children }) => (
    <div>
        {children}
    </div>
);

module.exports = ({ dispatch, getState }) => {
    return (
        <div>
            <Router>
                <Route path='/' >
                    <Route component={requireAuthentication(App)}>
                        <IndexRoute component={ProjectsList} />
                        <Route component={TasksLayout} path='projects/:projectId/'>
                            <Route component={TaskList} path='tasks' />
                            <Route component={TaskAdd} path='tasks/add' />
                            <Route component={TaskDetails} path='tasks/:id' />
                        </Route>
                        <Route component={ProjectsList} path='projects' />
                        <Route component={UsersList} path='users' />
                    </Route>
                    <Route component={Login} path='login' />

                    <Route path='*' component={NoMatch} />
                </Route>
            </Router>
        </div>
    );
};
