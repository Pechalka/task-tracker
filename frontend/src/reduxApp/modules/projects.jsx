
const initState = {
    projects: [],
    popupOpen: false,
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { ...state, projects: action.payload };

        case 'REMOVE_PROJECT': {
            const projects = state.projects.filter(product => product.id !== action.payload.id);
            return { ...state, projects };
        }

        case 'PROJECTS_OPEN_POPUP':
            return { ...state, popupOpen: true };

        case 'PROJECTS_CLOSE_POPUP':
            return { ...state, popupOpen: false };

        case 'ADD_PROJECT': {
            const projects = state.projects.concat([action.payload]);
            return { ...state, projects };
        }

        default:
            return state;
    }
}

import http from 'utils/http';
import { push } from 'redux-router';
import { fetchUsers } from './users';

export function loadProducts() {
    return (dispatch) => {
        const users = dispatch(fetchUsers());
        const projects = http.get('/api/projects')
            .then(payload => dispatch({
                type: 'FETCH_PRODUCTS',
                payload,
            }));

        return Promise.all([projects, users]);
    };
}


export function openPopup() {
    return {
        type: 'PROJECTS_OPEN_POPUP',
    };
}

export function closePopup() {
    return {
        type: 'PROJECTS_CLOSE_POPUP',
    };
}


export function removeProject(product) {
    return (dispatch) =>
        http.del(`/api/projects/${product.id}`)
            .then(() => dispatch({
                type: 'REMOVE_PROJECT',
                payload: product,
            }));
}

export function showAddProject() {
    return (dispatch) => {
        dispatch(push('/'));
        dispatch(openPopup());
    };
}

export function addProject(title, userIds) {
    return (dispatch) => {
        http.post('/api/projects', { title })
        // .then(project => http.post(`/api/projects/${project.id}/users`, { users: userIds }))
         .then(payload => {
             dispatch({
                 type: 'ADD_PROJECT',
                 payload,
             });
             dispatch(closePopup());
           //  this.setState({ title : '', userIds : [] })
         });
    };
}
