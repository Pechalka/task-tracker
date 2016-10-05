const initState = {
    versions: [],
};


export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_VERSIONS_SUCCESS':
            return { ...state, versions: action.payload };

        default:
            return state;
    }
};

import { push } from 'redux-router';

const getAllVersions = () => ({
    type: 'LOAD_VERSIONS',
    payload: {
        request: '/api/version',
    },
});

const createVersion = (data) => ({
    type: 'CREATE_VERSION',
    payload: {
        request: {
            url: '/api/version',
            method: 'post',
            data,
        },
    },
});

const createTask = (data) => ({
    type: 'CREATE_TASK',
    payload: {
        request: {
            url: '/api/tasks',
            method: 'post',
            data,
        },
    },
});

export const showPage = () => (dispatch) => dispatch(getAllVersions());


export function addVersion() {
    return (dispatch) => {
        const title = prompt('Create new Version', '');
        if (title) {
            dispatch(createVersion({ title }))
                .then(() => dispatch(getAllVersions()));
        }
    };
}

export function addTask(form) {
    return (dispatch, getState) => {
        const { router: { params: { projectId } } } = getState();
        dispatch(createTask(form)).then(() => dispatch(push(`/projects/${projectId}/tasks`)));
    };
}
