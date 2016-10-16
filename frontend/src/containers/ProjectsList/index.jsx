import React, { Component } from 'react';

import ProjectsList from './ProjectsList/';
import AddProjectModal from './AddProjectModal/';
import { observer } from 'mobx-react';

@observer(['projectsList'])
class ProjectsListPage extends Component {
    componentDidMount() {
        this.props.projectsList.showPage();
    }

    render() {
        return (
            <div>
                <ProjectsList />
                <AddProjectModal />
            </div>
        );
    }
}

// import loading from 'HOC/loading';
// import { showPage } from './state';

export default ProjectsListPage;
// loading([showPage])(ProjectsListPage);
