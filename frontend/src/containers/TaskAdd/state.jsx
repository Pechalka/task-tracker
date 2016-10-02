const initState = {
    versions: [],
};


export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_VERSIONS':
            return { ...state, versions: action.payload };

        default:
            return state;
    }
};

import http from 'utils/http';
import { push } from 'redux-router';

export const showPage = () => (dispatch) => http.get('/api/version')
            .then(data => dispatch({ type: 'SET_VERSIONS', payload: data }));


export function addVersion() {
    return (dispatch) => {
        const title = prompt('Create new Version', '');
        if (title) {
            http.post('/api/version', { title })
                .then(newVersion => dispatch({ type: 'ADD_VERSION', payload: newVersion }));
        }
    };
}

export function addTask(form) {
    return (dispatch, getState) => {
        const { router: { params: { projectId } } } = getState();
        http.post('/api/tasks', form).then(() => dispatch(push(`/projects/${projectId}/tasks`)));
    };
}
