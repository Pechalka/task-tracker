import React from 'react';

import { TaskTableContainer } from 'containers/tasks';

const TaskList = () => (
    <div>
        <TaskTableContainer />
    </div>
);

import need from 'utils/need';
import { loadTasks } from 'reduxApp/modules/tasks';

export default need(loadTasks)(TaskList);
