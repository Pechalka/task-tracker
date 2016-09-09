
const initState = {
    comments: [],
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'SET_COMMENTS':
            return { ...state, comments: action.payload };

        case 'REMOVE_COMMENTS': {
            const comments = state.comments.filter(coment => coment.id !== action.payload.id);
            return { ...state, comments };
        }

        default:
            return state;
    }
}

import http from 'utils/http';

function setComments(payload) {
    return {
        type: 'SET_COMMENTS',
        payload,
    };
}

export function loadComments(taskId) {
    return (dispatch) => http.get(`/api/tasks/${taskId}/comments`)
        .then(json => dispatch(setComments(json)));
}


export function addComment(text) {
    return (dispatch, getState) => {
        const {
            auth: { user: { name } },
            router: { params: { id } },
        } = getState();
        http.post(`/api/tasks/${id}/comments`, { text, userName: name })
            .then(() => dispatch(loadComments(id)));
    };
}

export function removeComent(comment) {
    return (dispatch, getState) => {
        const { router: { params: { id } } } = getState();
        return http.del(`/api/tasks/${id}/comments/${comment.id}`)
            .then(() => dispatch({ type: 'REMOVE_COMMENTS', payload: comment }));
    };
}

