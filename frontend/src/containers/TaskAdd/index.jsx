import React from 'react';
import TaskAddForm from './TaskAddForm';

const TaskAdd = () => (
    <div>
        <TaskAddForm />
    </div>
);

import loading from 'containers/Application/loading';
import { loadVersions } from 'reduxApp/modules/tasks';
import { fetchUsers } from 'reduxApp/modules/users';

export default loading([loadVersions, fetchUsers])(TaskAdd);
