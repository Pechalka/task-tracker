
const initState = {
    tasks: [],
    task: null,
    statuses: ['new', 'inprogress', 'testing', 'complited'],
    versions: [],
    page: 1,
    items: 0,

    sortField: 'createAt',
    sortDirection: 'desc',
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_TASKS': {
            const { count, items } = action.payload;
            return { ...state, tasks: items, items: Math.ceil(count / 5) };
        }

        case 'SET_TASK':
            return { ...state, task: action.payload };

        case 'SET_VERSIONS':
            return { ...state, versions: action.payload };

        case 'SET_TASKS_PAGE':
            return { ...state, page: action.payload };

        case 'ADD_VERSION':
            return { ...state, versions: state.versions.concat([action.payload]) };

        case 'TOGGLE_SORT':{
            const sortField = action.payload;
            let sortDirection;
            if (sortField === state.sortField) {
                sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                sortDirection = 'desc';
            }
            return { ...state, sortField, sortDirection };
        }

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

import LocalStorageApi from 'utils/LocalStorageApi';

const defaultTasks = [
    {
        id: 1,
        status: 'new',
        title: 'task1',
        assigneeName: 'vasa',
        version: 'V1',
        createAt: new Date(2016, 5, 2),
    },
    {
        id: 2,
        status: 'new',
        title: 'task2',
        assigneeName: 'peta',
        version: 'V1',
        createAt: new Date(2016, 5, 11),
    },
    {
        id: 3,
        status: 'new',
        title: 'task3',
        assigneeName: 'Afona',
        version: 'V1',
        createAt: new Date(2016, 5, 1),
    },
    {
        id: 4,
        status: 'new',
        title: 'task4',
        assigneeName: 'gala',
        version: 'V1',
        createAt: new Date(2016, 5, 7),
    },
    {
        id: 5,
        status: 'new',
        title: 'task5',
        assigneeName: 'vasa',
        version: 'V1',
        createAt: new Date(2016, 5, 4),
    },
    {
        id: 6,
        status: 'new',
        title: 'task6',
        assigneeName: 'Zooro',
        version: 'V1',
        createAt: new Date(2016, 5, 5),
    },
    {
        id: 7,
        status: 'new',
        title: 'task7',
        assigneeName: 'vasa',
        version: 'V1',
        createAt: new Date(2016, 5, 1),
    },
];

const tasksApi = new LocalStorageApi('/api/tasks', defaultTasks);

// TODO: page leavel loadTasks(params)
export function loadTasks() {
    return (dispatch, getState) => {
        // const { userId, status } = getState().taskFilter;
        // const paramsStr = toParams({
        //     assignee: userId,
        //     status,
        // });
        // const page = getState().tasks.page - 1;
        // return http.get(`/api/tasks/page/${page}/5?${paramsStr}`)
        //     .then(({ items, count }) => dispatch(setTasks({ items, count })));

        const page = getState().tasks.page;
        const sortField = getState().tasks.sortField;
        const sortDirection = getState().tasks.sortDirection;

        return tasksApi.getPage(null, {
            field: sortField,
            direction: sortDirection,
        }, page, 5)
            .then(({ items, count }) => dispatch(setTasks({ items, count })));
    };
}

export function toggleSort(field) {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_SORT',
            payload: field,
        });
        dispatch(loadTasks());
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

