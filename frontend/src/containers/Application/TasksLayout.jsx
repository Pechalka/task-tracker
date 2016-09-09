import React from 'react';

import TasksMenu from 'containers/Application/TasksMenu';
import Main from 'components/Layouts/Main';

const TasksLayout = ({ children }) => (
    <Main
      header={<TasksMenu />}
    >
        {children}
    </Main>
);


export default TasksLayout;
