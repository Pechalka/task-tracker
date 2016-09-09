
import React from 'react';

import TaskTable from './TaskTable';

const TaskList = () => (
    <div>
        <TaskTable />
    </div>
);

import need from 'utils/need';
import { loadTasks } from 'reduxApp/modules/tasks';

export default need(loadTasks)(TaskList);
