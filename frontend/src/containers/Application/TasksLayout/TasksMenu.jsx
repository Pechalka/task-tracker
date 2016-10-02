
import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const TasksMenu = ({
    projectId,
    logout,
}) => (
    <Navbar>
        <NavBrand>
            <Link to='/'>Task-tracker</Link>
        </NavBrand>
        <Nav>
            <LinkContainer to={`/projects/${projectId}/tasks`}>
                <NavItem eventKey={1} >
                    tasks
                </NavItem>
            </LinkContainer>
            <LinkContainer to={`/projects/${projectId}/tasks/add`}>
                <NavItem eventKey={2} href='#'>add task</NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={3} onSelect={() => logout()}>logout</NavItem>
        </Nav>
    </Navbar>
);

import { connect } from 'react-redux';
import { logout } from 'reduxApp/modules/auth';


export default connect(
    state => ({
        projectId: state.router.params.projectId,
        router: state.router,
    }),
    { logout }
)(TasksMenu);;
