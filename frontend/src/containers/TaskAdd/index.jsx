import React from 'react';
import TaskAddForm from './TaskAddForm/';

const TaskAdd = () => (
    <div>
        <TaskAddForm />
    </div>
);

import loading from 'HOC/loading';
import { showPage } from './state';

export default loading([showPage])(TaskAdd);
