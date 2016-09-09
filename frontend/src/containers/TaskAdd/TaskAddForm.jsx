import TaskAddFormComponent from 'components/TaskAddForm/';
import { connect } from 'react-redux';
import { addTask, addVersion } from 'reduxApp/modules/tasks';

const TaskAddForm = connect(
    state => ({
        statuses: state.tasks.statuses,
        users: state.users.users,
        versions: state.tasks.versions,
        assignee: state.auth.user ? state.auth.user.id : null,
    })
, { addTask, addVersion })(TaskAddFormComponent);


export default TaskAddForm;
