
const initState = {
    projects: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return { ...state, projects: action.payload };

        default:
            return state;
    }
};

import http from 'utils/http';

const setProjects = (projects) => ({ type: 'SET_PROJECTS', payload: projects });

const loadProjects = () => (dispatch) =>
    http.get('/api/projects').then(json => dispatch(setProjects(json)));

// Publick

export const showPage = () => (dispatch) => dispatch(loadProjects());

export const removeProject = ({ id }) => (dispatch) =>
    http.del(`/api/projects/${id}`).then(() => dispatch(loadProjects()));
