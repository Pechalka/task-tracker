import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

const NoMatch = () => (
    <div>
        <h1>404</h1>
    </div>
);

import App from 'pages/app/';
import Login from 'pages/Login/';

import ProjectsList from 'pages/ProjectsList/';
import TaskList from 'pages/TaskList/';
import TaskAdd from 'pages/TaskAdd/';
import TaskDetails from 'pages/TaskDetails/';

const Layout = ({ children }) => (
    <div>
        {children}
    </div>
);


const UsersList = () => (
    <div>
        <h1>UsersList</h1>
    </div>
);

module.exports = ({ dispatch, getState }) => {
    return (
        <div>
            <Router>
                <Route path='/' >
                    <Route component={App}>
                        <IndexRoute component={ProjectsList} />
                        <Route component={Layout} path='projects/:projectId/'>
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
