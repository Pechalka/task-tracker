
import { connect } from 'react-redux';
import { removeTask } from 'reduxApp/modules/tasks';

import TaskInfoComponent from 'components/TaskInfo/';


const TaskInfo = connect(
    state => ({
        task: state.tasks.task,
    }),
    { removeTask }
)(TaskInfoComponent);


export default TaskInfo;

