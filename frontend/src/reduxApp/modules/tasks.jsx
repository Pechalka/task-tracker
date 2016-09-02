
const initState = {
    tasks: [],
    comments: [],
    task: null,
    statuses: ['new', 'inprogress', 'testing', 'complited'],
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };

        case 'SET_TASK':
            return { ...state, task: action.payload };

        case 'SET_COMMENTS':
            return { ...state, comments: action.payload };

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

function setComments(payload) {
    return {
        type: 'SET_COMMENTS',
        payload,
    };
}

export function loadComments(taskId) {
    return (dispatch) => {
        return http.get('/api/comments').then(json => dispatch(setComments(json)));
    };
}

export function loadTasks() {
    return (dispatch) => {
        return http.get('/api/tasks').then(json => dispatch(setTasks(json)));
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

export function loadTask() {
    return (dispatch, getState) => {
        const { router: { params: { id } } } = getState();
        const taskRequest = http.get(`/api/tasks/${id}`).then(data => dispatch(setTask(data)));
        const commentsRequest = dispatch(loadComments());

        return Promise.all([taskRequest, commentsRequest]);
    };
}

export function addComment(text) {
    return (dispatch) => {
        http.post('/api/comments', { text, userName: 'vasa' }).then(() => dispatch(loadComments()));
    };
}

