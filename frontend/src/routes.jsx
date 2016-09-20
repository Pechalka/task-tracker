import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import Login from 'containers/Login/';
import ProjectsList from 'containers/ProjectsList/';
import { requireAuthentication } from 'containers/Application/AuthenticatedComponent';
import UsersList from 'containers/UsersList/';
import NoMatch from 'containers/NoMatch/';
import TasksLayout from 'containers/Application/TasksLayout';
import TasksList from 'containers/TasksList/';
import TaskAdd from 'containers/TaskAdd/';
import TaskDetails from 'containers/TaskDetails';

import App from 'components/Layouts/App';
import Test from 'containers/Test/';

module.exports = ({ dispatch, getState }) => (
    <div>
        <Router>
            <Route path='/' >
                <Route component={requireAuthentication(App)}>
                    <IndexRoute component={ProjectsList} />
                    <Route component={ProjectsList} path='projects' />
                    <Route component={TasksLayout} path='projects/:projectId/'>
                        <Route component={TasksList} path='tasks' />
                        <Route component={TaskAdd} path='tasks/add' />
                        <Route component={TaskDetails} path='tasks/:id' />
                    </Route>
                    <Route component={UsersList} path='users' />
                </Route>
                <Route component={Login} path='login' />
                <Route component={Test} path='test' />
                <Route path='*' component={NoMatch} />
            </Route>
        </Router>
    </div>
);
