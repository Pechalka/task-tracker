import { connect } from 'react-redux';

import { TaskTable as TaskTableComponent } from 'components/Tasks/';

const TaskTable = connect(
    state => ({
        tasks: state.tasks.tasks,
        projectId: state.router.params.projectId,
    })
)(TaskTableComponent);

export default TaskTable;
