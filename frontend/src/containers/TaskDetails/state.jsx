
const initState = {
    task: null,
    comments: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_COMMENTS_SUCCESS':
            return { ...state, comments: action.payload.items };
        case 'LOAD_TASK_SUCCESS':
            return { ...state, task: action.payload };
        default:
            return state;
    }
};

import { push } from 'redux-router';

const loadComments = (id) => ({
    type: 'LOAD_COMMENTS',
    payload: {
        request: `/api/tasks/${id}/comments/page/0/5`,
    },
});

const loadTask = (id) => ({
    type: 'LOAD_TASK',
    payload: {
        request: `/api/tasks/${id}`,
    },
});

const deleteTaskApiCall = (id) => ({
    type: 'DELETE_TASK',
    payload: {
        request: {
            url: `/api/tasks/${id}`,
            method: 'delete',
        },
    },
});

const deleteCommentApiCall = (taskId, commentId) => ({
    type: 'DEELTE_COMMENT',
    payload: {
        request: {
            url: `/api/tasks/${taskId}/comments/${commentId}`,
            method: 'delete',
        },
    },
});

const addCommentApiCall = (taskId, data) => ({
    type: 'ADD_COMMENT',
    payload: {
        request: {
            url: `/api/tasks/${taskId}/comments`,
            method: 'post',
            data,
        },
    },
});

// PUBLICK
export const deleteTask = () => (dispatch, getState) => {
    const { router: { params: { id, projectId } } } = getState();
    return dispatch(deleteTaskApiCall(id))
        .then(() => dispatch(push(`/projects/${projectId}/tasks`)));
};

export const addComment = (text) => (dispatch, getState) => {
    const {
        auth: { user: { name } },
        router: { params: { id } },
    } = getState();

    return dispatch(addCommentApiCall(id, { text, userName: name }))
        .then(() => dispatch(loadComments(id)));
};

export const deleteComment = (comment) => (dispatch, getState) => {
    const { router: { params: { id } } } = getState();
    return dispatch(deleteCommentApiCall(id, comment.id))
        .then(() => dispatch(loadComments(id)));
};

export const showPage = ({ id }) => (dispatch) =>
    Promise.all([
        dispatch(loadComments(id)),
        dispatch(loadTask(id)),
    ]);
