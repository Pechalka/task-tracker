
import { push } from 'redux-router';


import { getActions } from 'reduxApp/modules/rest';
const comments = getActions('/api/tasks/:id/comments', 'comments');
const tasks = getActions('/api/tasks', 'tasks');

// PUBLICK
export const deleteTask = () => (dispatch, getState) => {
    const { router: { params: { id, projectId } } } = getState();
    return dispatch(tasks.remove({ id }))
            .then(() => dispatch(push(`/projects/${projectId}/tasks`)));
};

export const addComment = (text) => (dispatch, getState) => {
    const {
        auth: { user: { name } },
    } = getState();

    return dispatch(comments.create({ text, userName: name }))
            .then(() => dispatch(comments.loadAll()));
};

export const deleteComment = (comment) => (dispatch, getState) =>
    dispatch(comments.remove(comment))
            .then(() => dispatch(comments.loadAll()));

export const showPage = ({ id }) => (dispatch) => {
    comments.setUrl(`/api/tasks/${id}/comments`);
    return Promise.all([
        dispatch(comments.loadAll()),
        dispatch(tasks.loadOne(id)),
    ]);
};
