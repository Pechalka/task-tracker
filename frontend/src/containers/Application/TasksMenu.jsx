import { connect } from 'react-redux';
import { logout } from 'reduxApp/modules/auth';
import Menu from 'components/TasksMenu/';


const TasksMenu = connect(
    state => ({
        projectId: state.router.params.projectId,
        router: state.router,
    }),
    { logout }
)(Menu);


export default TasksMenu;
