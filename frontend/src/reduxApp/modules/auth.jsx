
const initState = {
    user: null,
};

export const LOGIN = 'LOGIN';
import axios from 'axios';

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

export const logout = () => dispatch => {
    axios.delete('/api/session')
        .then(() => dispatch(push('/login')));
}

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
                data: form
            },
        },
    }).then(data => dispatch(login(data.payload)));


export const checkAuth = () => (dispatch) => {
    return axios.get('/api/session')
        .then((response) => dispatch(startSession(response.data)))
        .catch(() => dispatch(logout()));
};

// ({
//     types: ['START_SESSION', 'LOGOUT'],
//     payload: {
//         request: '/api/session',
//     },
// });

