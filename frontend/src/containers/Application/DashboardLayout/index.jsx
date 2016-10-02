import React from 'react';

import DashboardMenu from './DashboardMenu';
import Main from 'components/Layouts/Main';

const TasksLayout = ({ children }) => (
    <Main
      header={<DashboardMenu />}
    >
        {children}
    </Main>
);


export default TasksLayout;
