import React from 'react';

import ProjectsList from './ProjectsList/';
import AddProjectModal from './AddProjectModal';

import DashboardMenu from 'containers/Application/DashboardMenu';
import Main from 'components/Layouts/Main';

const ProjectsListPage = () => (
    <Main
      header={<DashboardMenu />}
    >
        <ProjectsList />
        <AddProjectModal />
    </Main>
);

import loading from 'containers/Application/loading';
import { showPage } from './state';

export default loading([showPage])(ProjectsListPage);
