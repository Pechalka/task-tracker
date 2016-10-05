
const initState = {
    users: [],
    statuses: ['new', 'inprogress', 'testing', 'complited'],
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'LOAD_USERS_SUCCESS':
            return { ...state, users: action.payload };

        default:
            return state;
    }
}

import { push } from 'redux-router';
import { openPopup } from 'containers/ProjectsList/state';

const getAllUsers = () => ({
    type: 'LOAD_USERS',
    payload: {
        request: '/api/users',
    },
});

export const loadUsers = () => (dispatch) => dispatch(getAllUsers());

export const getStatusesOptions = (state) =>
    state.app.statuses.map(str => ({ value: str, label: str }));

export const getUserOptions = (state) =>
    state.app.users.map(user => ({ value: user.id, label: user.name }));

export const appStart = () => (dispatch) => dispatch(loadUsers());

export const showAddProject = () => (dispatch) => {
    dispatch(push('/'));
    dispatch(openPopup());
};
