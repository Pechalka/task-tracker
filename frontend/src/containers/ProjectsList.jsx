import React from 'react';
import { connect } from 'react-redux';
import { ProjectsList, ProjectPopup } from 'components/Projects/';

import { fetchProducts, removeProject, openPopup, closePopup, addProject, fetchUsers } from 'reduxApp/modules/projects';

const ProjectsListContainer = connect(
    state => ({
        projects: state.projects.projects,
    }),
    { fetchProducts, removeProject, openPopup, fetchUsers }
)(ProjectsList);

const ProjectPopupContainer = connect(
    state => ({
        show: state.projects.popupOpen,
        users: state.projects.users,
    }),
    { onHide: closePopup, addProject }
)(ProjectPopup);

export {
    ProjectsListContainer,
    ProjectPopupContainer,
};
