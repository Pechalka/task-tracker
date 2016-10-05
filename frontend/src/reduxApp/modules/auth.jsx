
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

import { push } from 'redux-router';


export function startSession(payload) {
    return {
        type: 'START_SESSION',
        payload,
    };
}

export const logout = () => dispatch =>
    dispatch({
        types: ['LOGOUT', 'LOGOUT'],
        payload: {
            request: {
                url: '/api/session',
                mehtod: 'delete',
            },
        },
    }).then(() => dispatch(push('/login')));


export const login = (form) => (dispatch) =>
    dispatch({
        types: ['START_SESSION', 'LOGIN_FAIL'],
        payload: {
            request: {
                url: '/api/login',
                method: 'post',
                data: form,
            },
        },
    }).then(() => dispatch(push('/')));


export const registr = (form) => dispatch =>
    dispatch({
        type: 'REGISTR',
        payload: {
            request: {
                url: '/api/users',
                method: 'post',
            },
        },
    }).then(data => dispatch(login(data)));


export const checkAuth = () => ({
    types: ['START_SESSION', 'LOGOUT'],
    payload: {
        request: '/api/session',
    },
});

