
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'mobx-react';

import createStores from 'Stores';

import { browserHistory, Router } from 'react-router';

const getRoutes = require('./routes');
const Root = ({ stores }) => (
    <div>
        <Provider {...stores} >
            <Router history={browserHistory}>
                {getRoutes()}
            </Router>
        </Provider>
    </div>
);

window.onload = () => {
    const root = document.getElementById('app');
    const stores = createStores();
    stores.app.appStart();
    render((
        <Root stores={stores} />
    ), root);
};

