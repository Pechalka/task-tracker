
const initState = {
    projects: [],
    popupOpen: false,
    users: [],
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return { ...state, projects: action.payload };

        case 'FETCH_USERS':
            return { ...state, users: action.payload };

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

export function fetchProducts() {
    return (dispatch) => {
        http.get('/api/projects')
            .then(payload => dispatch({
                type: 'FETCH_PRODUCTS',
                payload,
            }));
    };
}

export function fetchUsers() {
    return (dispatch) => http.get('/api/users')
            .then(payload => dispatch({
                type: 'FETCH_USERS',
                payload,
            }));
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
