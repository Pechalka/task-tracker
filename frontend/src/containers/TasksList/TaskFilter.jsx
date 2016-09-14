import { connect } from 'react-redux';

import * as action from 'reduxApp/modules/taskFilter';
// import { loadTasks } from 'reduxApp/modules/tasks';

import TaskFilter from 'components/TaskFilter/';

export default connect(
    state => ({
        statuses: state.tasks.statuses,
        users: state.users.users,
        userId: state.taskFilter.userId,
        status: state.taskFilter.status,
    }),
    {
        changeFilter: action.changeFilter,
        findTask: action.findTask,
    },
)(TaskFilter);

