var React = require('react');

var { Grid, Button , Label, ListGroup, ListGroupItem, Input, Label, Modal } = require('react-bootstrap');
var Menu = require('blocks/menu/index.jsx');


import { ProjectsListContainer, ProjectPopupContainer } from 'containers/ProjectsList';

let ProjectsListPage = React.createClass({
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
import { fetchProducts, removeProject, openPopup, closePopup, addProject, fetchUsers } from 'modules/projects';



module.exports = connect(
    state => ({
        projects: state.projects.projects,
    }),
    { fetchProducts, removeProject, openPopup, fetchUsers }
)(ProjectsListPage);
