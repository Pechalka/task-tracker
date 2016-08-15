import React from 'react';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

const NoMatch = () => (
    <div>
        <h1>404</h1>
    </div>
);

import App from 'pages/app/';
import Login from 'pages/Login/';
import ProjectsList from 'pages/ProjectsList/';

module.exports = ({ dispatch, getState }) => {
    return (
        <div>
            <Router history={hashHistory}>
                <Route path='/' >
                    <Route component={App}>
                        <IndexRoute component={ProjectsList} />
                        {/*<Route component={Layout} path='projects/:projectId/'>
                            <Route component={TaskList} path='tasks' />
                            <Route component={TaskAdd} path='tasks/add' />
                            <Route component={TaskDetails} path='tasks/:id' />
                        </Route>
                        <Route component={ProjectsList} path='projects' />
                        <Route component={UsersList} path='users' />*/}
                    </Route>

                    <Route component={Login} path='login' />

                    <Route path='*' component={NoMatch} />
                </Route>
            </Router>
        </div>
    );
};
