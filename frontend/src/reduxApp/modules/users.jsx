
const initState = {
    users: [],
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return { ...state, users: action.payload };

        case 'REMOVE_USER': {
            const users = state.users.filter(user => user.id !== action.payload.id);
            return { ...state, users };
        }

        default:
            return state;
    }
}

import http from 'utils/http';

export function fetchUsers() {
    return (dispatch) => http.get('/api/users')
            .then(payload => dispatch({
                type: 'FETCH_USERS',
                payload,
            }));
}

export function removeUser(user) {
    return (dispatch) => http.del(`/api/users/${user.id}`)
        .then(() => {
            dispatch({ type: 'REMOVE_USER', payload: user });
        });
}
