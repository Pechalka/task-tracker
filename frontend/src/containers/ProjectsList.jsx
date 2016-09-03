import React from 'react';
import { connect } from 'react-redux';
import { ProjectsList, ProjectPopup } from 'components/Projects/';
import DashboardMenu from 'components/DashboardMenu/';

import {
    fetchProducts, removeProject,
    openPopup, closePopup, addProject, fetchUsers,
} from 'reduxApp/modules/projects';
import { logout } from 'reduxApp/modules/auth';


const DashboardMenuContainer = connect(
    null,
    { addProject: openPopup, logout }
)(DashboardMenu);

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
    DashboardMenuContainer,
    ProjectsListContainer,
    ProjectPopupContainer,
};
