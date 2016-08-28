
// import React from 'react';
// import { render } from 'react-dom';


// const RedBox = require('redbox-react').default;

// window.onload = () => {
//     const root = document.getElementById('app');
//     try {
//         const { Root } = require('routes');
//         render((
//             <Root />
//         ), root);
//     } catch (e) {
//         render(<RedBox error={e} />, root);
//     }
// };


import React, { PropTypes } from 'react';
import { render } from 'react-dom';



import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import useScroll from 'scroll-behavior';

//import createHistory from 'history/lib/createHashHistory';
import { createHistory } from 'history';

//'history/lib/createBrowserHistory';

import rootReducer from 'reducers';
import { reduxReactRouter } from 'redux-router';

// import http from 'utils/http';
// import { makeLogout } from 'modules/auth';


const middleware = applyMiddleware(thunk);

const createHistoryCustom = (options) => useScroll(createHistory({ queryKey: false, ...options }));

const createStoreWithMiddleware = compose(
    middleware,
    reduxReactRouter({ createHistory: createHistoryCustom })
);

const _store = createStoreWithMiddleware(createStore)(rootReducer);

const getRoutes = require('./routes');
const Root = ({ store }) => (
    <Provider store={store}>
        <ReduxRouter>
          {getRoutes(store)}
        </ReduxRouter>
    </Provider>
);

// http.onInvalidToken(() =>{
//     _store.dispatch(makeLogout());
// });

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

window.onload = () => {
    const root = document.getElementById('app');
    try {
        render((
            <Root store={_store} />
        ), root);
    } catch (e) {
        const RedBox = require('redbox-react').default;
        render(<RedBox error={e} />, root);
    }
};

// _store.dispatch(appStart(() => {
//     render((
//         <Root store={_store} />
//     ), document.getElementById('app'));
// }));

