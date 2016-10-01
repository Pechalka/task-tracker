import { connect } from 'react-redux';
import AddProjectModalComponent from 'components/AddProjectModal/';

import {
    closePopup, addProject,
} from 'reduxApp/modules/projects';


const AddProjectModal = connect(
    state => ({
        show: state.projects.popupOpen,
        users: state.app.users,
    }),
    { onHide: closePopup, addProject }
)(AddProjectModalComponent);

export default AddProjectModal;
