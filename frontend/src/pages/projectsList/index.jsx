const React = require('react');

import { ProjectsListContainer, ProjectPopupContainer, DashboardMenuContainer } from 'containers/ProjectsList';

import { Grid, Row, Col } from 'react-bootstrap';

const ProjectsListPage = React.createClass({
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchUsers();
    },
    render() {
        return (
            <div>
                <DashboardMenuContainer />
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <ProjectsListContainer />
                            <ProjectPopupContainer />
                        </Col>
                    </Row>
                </Grid>
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
