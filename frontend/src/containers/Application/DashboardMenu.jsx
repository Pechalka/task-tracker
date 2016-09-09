
import DashboardMenuComponent from 'components/DashboardMenu/';
import { connect } from 'react-redux';

import { showAddProject } from 'reduxApp/modules/projects';
import { logout } from 'reduxApp/modules/auth';

const DashboardMenu = connect(
    null,
    { addProject: showAddProject, logout }
)(DashboardMenuComponent);

export default DashboardMenu;
