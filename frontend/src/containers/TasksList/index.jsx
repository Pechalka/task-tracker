
import React from 'react';

import TaskTable from './TaskTable';

import TaskFilter from './TaskFilter';
import TaskPager from './TaskPager';

const TaskList = () => (
    <div>
        <TaskFilter />
        <TaskTable />
        <TaskPager />
    </div>
);

import loading from 'containers/Application/loading';
import { loadTasks } from 'reduxApp/modules/tasks';
import { fetchUsers } from 'reduxApp/modules/users';

export default loading([loadTasks, fetchUsers])(TaskList);
