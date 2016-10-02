
const initState = {
    projects: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'PROJECTS_OPEN_POPUP':
            return { ...state, popupOpen: true };

        case 'PROJECTS_CLOSE_POPUP':
            return { ...state, popupOpen: false };

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


export const openPopup = () => ({ type: 'PROJECTS_OPEN_POPUP' });
export const closePopup = () => ({ type: 'PROJECTS_CLOSE_POPUP' });

export const addProject = (title, userIds) => (dispatch) =>
    http.post('/api/projects', { title })
        .then(payload => {
            dispatch({
                type: 'ADD_PROJECT',
                payload,
            });
            dispatch(closePopup());
        });
