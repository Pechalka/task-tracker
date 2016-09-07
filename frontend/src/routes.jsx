import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import Login from 'pages/Login';

import ProjectsList from 'pages/ProjectsList';
import { requireAuthentication } from 'containers/Auth';
import UsersList from 'pages/UsersList';
import NoMatch from 'pages/NoMatch';
import { TasksLayout, TaskAdd, TaskDetails, TaskList } from 'pages/TasksLayout';
import Test from 'pages/Test';

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
                        <Route component={ProjectsList} path='projects' />
                        <Route component={TasksLayout} path='projects/:projectId/'>
                            <Route component={TaskList} path='tasks' />
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
};
