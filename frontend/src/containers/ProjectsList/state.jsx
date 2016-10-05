
const initState = {
    projects: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'PROJECTS_OPEN_POPUP':
            return { ...state, popupOpen: true };

        case 'PROJECTS_CLOSE_POPUP':
            return { ...state, popupOpen: false };

        case 'LOAD_PRODUCTS_SUCCESS':
            return { ...state, projects: action.payload };

        default:
            return state;
    }
};


const getAllProjects = () => ({
    type: 'LOAD_PRODUCTS',
    payload: {
        request: '/api/projects',
    },
});

const deleteProjects = (id) => ({
    type: 'DELETE_PRODUCT',
    payload: {
        request: {
            url: `/api/projects/${id}`,
            method: 'delete',
        },
    },
});

const createProject = (data) => ({
    type: 'CREATE_PROJECT',
    payload: {
        request: {
            url: '/api/projects',
            data,
            method: 'post',
        },
    },
});


const loadProjects = () => (dispatch) => dispatch(getAllProjects());

// Publick

export const showPage = () => (dispatch) => dispatch(loadProjects());

export const removeProject = ({ id }) => (dispatch) => dispatch(deleteProjects(id))
    .then(() => dispatch(loadProjects()));


export const openPopup = () => ({ type: 'PROJECTS_OPEN_POPUP' });
export const closePopup = () => ({ type: 'PROJECTS_CLOSE_POPUP' });

export const addProject = (title, userIds) => (dispatch) =>
    dispatch(createProject({ title }))
        .then(() => dispatch(getAllProjects()))
        .then(() => dispatch(closePopup()));
