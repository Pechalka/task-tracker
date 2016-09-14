
const initState = {
    tasks: [],
    task: null,
    statuses: ['new', 'inprogress', 'testing', 'complited'],
    versions: [],
    page: 1,
    items: 0,
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_TASKS': {
            const { count, items } = action.payload;
            return { ...state, tasks: items, items: Math.ceil(count / 10) };
        }

        case 'SET_TASK':
            return { ...state, task: action.payload };

        case 'SET_VERSIONS':
            return { ...state, versions: action.payload };

        case 'SET_TASKS_PAGE':
            return { ...state, page: action.payload };

        case 'ADD_VERSION':
            return { ...state, versions: state.versions.concat([action.payload]) };

        default:
            return state;
    }
}

import { push } from 'redux-router';
import http from 'utils/http';

function setTasks(payload) {
    return {
        type: 'SET_TASKS',
        payload,
    };
}

function setTask(payload) {
    return {
        type: 'SET_TASK',
        payload,
    };
}

const toParams = (obj) => Object.keys(obj)
    .filter(key => !!obj[key])
    .map(key => `${key}=${obj[key]}`)
    .join('&');

// TODO: page leavel loadTasks(params)
export function loadTasks() {
    return (dispatch, getState) => {
        const { userId, status } = getState().taskFilter;
        const paramsStr = toParams({
            assignee: userId,
            status,
        });
        const page = getState().tasks.page - 1;
        return http.get(`/api/tasks/page/${page}/5?${paramsStr}`)
            .then(({ items, count }) => dispatch(setTasks({ items, count })));
    };
}

export function setPage(page) {
    return {
        type: 'SET_TASKS_PAGE',
        payload: page,
    };
}

export function changeTaskPage(e, data) {
    return (dispatch) => {
        dispatch(setPage(data.eventKey));
        dispatch(loadTasks());
    };
}

export function addTask(form) {
    return (dispatch, getState) => {
        const { router: { params: { projectId } } } = getState();
        http.post('/api/tasks', form).then(() => dispatch(push(`/projects/${projectId}/tasks`)));
    };
}

export function removeTask() {
    return (dispatch, getState) => {
        const { router: { params: { id, projectId } } } = getState();
        http.del(`/api/tasks/${id}`).then(() => dispatch(push(`/projects/${projectId}/tasks`)));
    };
}

export function loadTask({ id }) {
    return (dispatch, getState) => http.get(`/api/tasks/${id}`)
        .then(data => dispatch(setTask(data)));
}


export function addVersion() {
    return (dispatch) => {
        const title = prompt('Create new Version', '');
        if (title) {
            http.post('/api/version', { title })
                .then(newVersion => dispatch({ type: 'ADD_VERSION', payload: newVersion }));
        }
    };
}

export function loadVersions() {
    return (dispatch) => http.get('/api/version')
            .then(data => dispatch({ type: 'SET_VERSIONS', payload: data }));
}

// export function showAddTaskForm() {
//     return (dispatch) => {
//         const users = dispatch(fetchUsers());
//         const versions = http.get('/api/version')
//             .then(data => dispatch({ type: 'SET_VERSIONS', payload: data }));
//         return Promise.all([users, versions]);
//     };
// }

