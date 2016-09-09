
import React from 'react';

import TaskTable from './TaskTable';

const TaskList = () => (
    <div>
        <TaskTable />
    </div>
);

import loading from 'containers/Application/loading';
import { loadTasks } from 'reduxApp/modules/tasks';

export default loading(loadTasks)(TaskList);
