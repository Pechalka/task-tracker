import ProjectsListComponent from 'components/ProjectsList/';
import { connect } from 'react-redux';

import {
    fetchProducts, removeProject,
    openPopup, fetchUsers,
} from 'reduxApp/modules/projects';

const ProjectsList = connect(
    state => ({
        projects: state.projects.projects,
    }),
    { fetchProducts, removeProject, openPopup, fetchUsers }
)(ProjectsListComponent);

export default ProjectsList;
