import { connect } from 'react-redux';

import TaskTableComponent from 'components/TaskTable/';

const TaskTable = connect(
    state => ({
        tasks: state.tasks.tasks,
        projectId: state.router.params.projectId,
    })
)(TaskTableComponent);

export default TaskTable;
