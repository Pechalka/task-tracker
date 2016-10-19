
const initState = {
    userId: null,
    status: 'new',
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_USER_ID':
            return { ...state, userId: action.payload };
        case 'CHANGE_STATUS':
            return { ...state, status: action.payload };

        default:
            return state;
    }
}


import { getActions } from 'reduxApp/modules/rest';

const tasks = getActions('/api/tasks', 'tasks');

const loadTasks = () => (dispatch, getState) => {
    const {
        tasksList: {
            userId,
            status,
        },
    } = getState();
    const params = {
        assignee: userId,
        status,
    };
    return dispatch(tasks.getPage(params));
};


export const changeUserId = (id) => ({ type: 'CHANGE_USER_ID', payload: id });
export const changeStatus = (status) => ({ type: 'CHANGE_STATUS', payload: status });

export const makeSearch = () => (dispatch) => dispatch(loadTasks());
export const showPage = () => (dispatch, getState) => dispatch(loadTasks());

