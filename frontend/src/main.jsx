

import React, { PropTypes } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import createStore from './reduxApp/create.jsx';
import { Provider as MOBXPRovider } from 'mobx-react';

import App from 'App';
import TaskList from 'containers/TasksList/state';
import TaskDetails from 'containers/TaskDetails/state';


const getRoutes = require('./routes');
const Root = ({ store, stores }) => (
    <div>
        <Provider store={store}>
            <div>

                <div>
                <MOBXPRovider {...stores} >
                    <ReduxRouter>
                    {getRoutes(store)}
                    </ReduxRouter>
                </MOBXPRovider>
                </div>

            </div>
        </Provider>
    </div>
);


Root.propTypes = {
    store: PropTypes.object.isRequired,
};

import { appStart } from 'reduxApp/modules/app';


window.onload = () => {
    const root = document.getElementById('app');
    //try {
        const store = createStore();
        const app = new App();
        app.appStart();
        const stores = {
            app,
            taskList: new TaskList(),
            taskDetails: new TaskDetails(),
        };
        render((
            <Root store={store} stores={stores} />
        ), root);
        store.dispatch(appStart());
    // } catch (e) {
    //     const RedBox = require('redbox-react').default;
    //     render(<RedBox error={e} />, root);
    // }
};

