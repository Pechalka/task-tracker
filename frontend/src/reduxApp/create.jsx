
import { reduxReactRouter } from 'redux-router';

import useScroll from 'scroll-behavior';
import { createHistory } from 'history';

import { applyMiddleware, compose, createStore as _createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/reducer';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
    responseType: 'json',
});

client.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response.data),
);

export default function createStore() {
    const middleware = applyMiddleware(thunk, axiosMiddleware(client));

    const createHistoryCustom = (options) => useScroll(createHistory({
        queryKey: false, ...options,
    }));

    const createStoreWithMiddleware = compose(
        middleware,
        reduxReactRouter({ createHistory: createHistoryCustom })
    );

    const _store = createStoreWithMiddleware(_createStore)(rootReducer);

    return _store;
}
