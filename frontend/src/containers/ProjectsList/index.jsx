import React from 'react';

import ProjectsList from './ProjectsList';
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

import need from 'utils/need';
import { loadProducts } from 'reduxApp/modules/projects';

export default need(loadProducts)(ProjectsListPage);
