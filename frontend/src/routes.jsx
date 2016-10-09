import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import Login from 'containers/Login/';
import ProjectsList from 'containers/ProjectsList/';
import { requireAuthentication } from 'HOC/AuthenticatedComponent';
import UsersList from 'containers/UsersList/';
import NoMatch from 'containers/NoMatch/';
import TasksLayout from 'containers/Application/TasksLayout/';
import DashboardLayout from 'containers/Application/DashboardLayout/';
import TasksList from 'containers/TasksList/';
import TaskAdd from 'containers/TaskAdd/';
import TaskDetails from 'containers/TaskDetails';
import Test from 'containers/Test/';

import App from 'components/Layouts/App';

module.exports = ({ dispatch, getState }) => (
    <div>
        <Router>
            <Route path='/' >
                <Route component={Test} path='test' />
                <Route component={requireAuthentication(App)}>
                    <Route component={TasksLayout} path='projects/:projectId/'>
                        <Route component={TasksList} path='tasks' />
                        <Route component={TaskAdd} path='tasks/add' />
                        <Route component={TaskDetails} path='tasks/:id' />
                    </Route>
                    <Route component={DashboardLayout}>
                        <IndexRoute component={ProjectsList} />
                        <Route component={ProjectsList} path='projects' />
                        <Route component={UsersList} path='users' />
                    </Route>
                </Route>
                <Route component={Login} path='login' />
                <Route path='*' component={NoMatch} />
            </Route>
        </Router>
    </div>
);
