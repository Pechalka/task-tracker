
const initState = {
    user: null,
};

export const LOGIN = 'LOGIN';

export function reducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return state;

        case 'START_SESSION':
            return { ...state, user: action.payload };

        default:
            return state;
    }
}

import http from 'utils/http';

import { push } from 'redux-router';


export function startSession(payload) {
    return {
        type: 'START_SESSION',
        payload,
    };
}

export function logout() {
    return (dispatch) => {
        http.del('/api/session').then(() => {
            dispatch({ type: 'LOGOUT' });
            dispatch(push('/login'));
        });
    };
}

export function login(form) {
    return (dispatch) => http.post('/api/login', form)
        .then(user => {
            dispatch(startSession(user));
            dispatch(push('/'));
        });
}

export function registr(form) {
    return (dispatch) => http.post('/api/users', form)
        .then(user => {
            dispatch(login(form));
        });
}


export function checkAuth() {
    return (dispatch) => {
        http.get('/api/session')
            .then(user => dispatch(startSession(user)))
            .fail(() => dispatch(logout()));
    };
}
// TODO
