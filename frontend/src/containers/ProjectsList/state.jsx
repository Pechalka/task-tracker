
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

import * as popup from 'reduxApp/modules/popup';

import { wrapDispatch as wd } from 'multireducer';

function getActions(actions, name) {
    const wdActions = {};
    for (const key in actions) {
        if (actions[key]) {
            wdActions[key] = (...arg) =>
                            (dispatch) => wd(dispatch, 'addProject')(actions[key](arg));
        }
    }

    return wdActions;
}

const _addProject = getActions(popup, 'addProject');

export const openPopup = _addProject.open;
export const closePopup = _addProject.close;

export const addProject = (title, userIds) => (dispatch) =>
    http.post('/api/projects', { title })
        .then(payload => {
            dispatch({
                type: 'ADD_PROJECT',
                payload,
            });
            dispatch(closePopup());
        });
