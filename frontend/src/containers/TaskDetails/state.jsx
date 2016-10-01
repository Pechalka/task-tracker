
const initState = {
    task: null,
    comments: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return { ...state, comments: action.payload };
        case 'SET_TASK':
            return { ...state, task: action.payload };
        default:
            return state;
    }
};

import http from 'utils/http';
import { push } from 'redux-router';

const setComments = (comments) => ({ type: 'SET_COMMENTS', payload: comments });
const setTask = (task) => ({ type: 'SET_TASK', payload: task });

const loadComments = (id) => (dispatch) =>
    http.get(`/api/tasks/${id}/comments/page/0/5`)
        .then(json => dispatch(setComments(json.items)));

const loadTask = (id) => (dispatch) =>
    http.get(`/api/tasks/${id}`)
        .then(json => dispatch(setTask(json)));

// PUBLICK

export const deleteTask = () => (dispatch, getState) => {
    const { router: { params: { id, projectId } } } = getState();
    return http.del(`/api/tasks/${id}`).then(() => dispatch(push(`/projects/${projectId}/tasks`)));
};

export const addComment = (text) => (dispatch, getState) => {
    const {
        auth: { user: { name } },
        router: { params: { id } },
    } = getState();
    return http.post(`/api/tasks/${id}/comments`, { text, userName: name })
        .then(() => dispatch(loadComments(id)));
};

export const deleteComment = (comment) => (dispatch, getState) => {
    const { router: { params: { id } } } = getState();
    return http.del(`/api/tasks/${id}/comments/${comment.id}`)
        .then(() => dispatch(loadComments(id)));
};

export const showPage = ({ id }) => (dispatch) =>
    Promise.all([
        dispatch(loadComments(id)),
        dispatch(loadTask(id)),
    ]);
