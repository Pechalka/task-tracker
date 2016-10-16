import React from 'react';

import TasksMenu from './TasksMenu';
import Main from 'components/Layouts/Main';

const TasksLayout = ({ children, params: { projectId } }) => (
    <Main
      header={<TasksMenu projectId={projectId} />}
    >
        {children}
    </Main>
);


export default TasksLayout;
