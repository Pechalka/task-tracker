import { connect } from 'react-redux';

import TaskTableComponent from 'components/TaskTable/';

import { toggleSort } from 'reduxApp/modules/tasks';

const TaskTable = connect(
    state => ({
        tasks: state.tasks.tasks,
        projectId: state.router.params.projectId,
        sortField: state.tasks.sortField,
        sortDirection: state.tasks.sortDirection,
    }),
    { toggleSort }
)(TaskTableComponent);

export default TaskTable;
