
const initState = {
    users: [],
    statuses: ['new', 'inprogress', 'testing', 'complited'],
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };

        default:
            return state;
    }
}

import http from 'utils/http';


const setUsers = (users) => ({ type: 'SET_USERS', payload: users });

export const loadUsers = () => (dispatch) =>
    http.get('/api/users')
        .then(users => dispatch(setUsers(users)));

export const getStatusesOptions = (state) =>
    state.app.statuses.map(str => ({ value: str, label: str }));

export const getUserOptions = (state) =>
    state.app.users.map(user => ({ value: user.id, label: user.name }));

export const appStart = () => (dispatch) => dispatch(loadUsers());

