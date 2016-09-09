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

import loading from 'containers/Application/loading';
import { loadProducts } from 'reduxApp/modules/projects';
import { fetchUsers } from 'reduxApp/modules/users';

export default loading([loadProducts, fetchUsers])(ProjectsListPage);
