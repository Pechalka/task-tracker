
import React from 'react';

import TaskTable from './TaskTable/';

import TaskFilter from './TaskFilter/';
import TaskPager from './TaskPager/';

const TaskList = () => (
    <div>
        <TaskFilter />
        <TaskTable />
        <TaskPager />
    </div>
);

import loading from 'HOC/loading';

import { showPage } from './state';

export default loading([showPage])(TaskList);
