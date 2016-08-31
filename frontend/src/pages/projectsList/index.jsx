const React = require('react');

import { ProjectsListContainer, ProjectPopupContainer } from 'containers/ProjectsList';

const ProjectsListPage = React.createClass({
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchUsers();
    },
    render() {
        return (
            <div>
                <ProjectsListContainer />
                <ProjectPopupContainer />
            </div>
        );
    },
});

import { connect } from 'react-redux';
import { fetchProducts, fetchUsers } from 'reduxApp/modules/projects';

module.exports = connect(
    state => ({
        projects: state.projects.projects,
    }),
    { fetchProducts, fetchUsers }
)(ProjectsListPage);
