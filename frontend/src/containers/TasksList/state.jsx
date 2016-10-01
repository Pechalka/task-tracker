
const initState = {
    userId: null,
    status: 'new',

    tasks: [],
    page: 1,
    items: 0,
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_USER_ID':
            return { ...state, userId: action.payload };
        case 'CHANGE_STATUS':
            return { ...state, status: action.payload };
        case 'SET_PAGE':
            return { ...state, page: action.payload };

        case 'SET_TASKS': {
            const { count, items } = action.payload;
            return { ...state, tasks: items, items: Math.ceil(count / 10) };
        }

        default:
            return state;
    }
}

import http, { toParams } from 'utils/http';

const setTasks = (payload) => ({ type: 'SET_TASKS', payload });

const loadTasks = () => (dispatch, getState) => {
    const {
        tasksList: {
            userId,
            status,
            page,
        },
//        router: { params: { projectId } },
    } = getState();
    const query = toParams({
        assignee: userId,
        status,
    });
    return http.get(`/api/tasks/page/${page}/5?${query}`)
        .then(payload => dispatch(setTasks(payload)));
};

const setPage = (page) => ({ type: 'SET_PAGE', payload: page });

// PUBLIC

export const changeUserId = (id) => ({ type: 'CHANGE_USER_ID', payload: id });
export const changeStatus = (status) => ({ type: 'CHANGE_STATUS', payload: status });

export const changePage = (page) => (dispatch) => {
    dispatch(setPage(page));
    return dispatch(loadTasks());
};

export const makeSearch = () => (dispatch) => dispatch(loadTasks());
export const showPage = () => (dispatch) => dispatch(loadTasks());

