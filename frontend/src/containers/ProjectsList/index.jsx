import React from 'react';

import ProjectsList from './ProjectsList/';
import AddProjectModal from './AddProjectModal/';

const ProjectsListPage = () => (
    <div>
        <ProjectsList />
        <AddProjectModal />
    </div>
);

import loading from 'HOC/loading';
import { showPage } from './state';

export default loading([showPage])(ProjectsListPage);
