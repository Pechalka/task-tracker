import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export const Menu = ({
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


export const DashboardMenu = ({
    logout,
    addProject,
}) => (
    <Navbar>
        <NavBrand>
            <Link to='/'>Task-tracker</Link>
        </NavBrand>
        <Nav>
            <NavItem eventKey={2} onClick={addProject}>add project</NavItem>
            <LinkContainer to='/users'>
                <NavItem eventKey={1}>users</NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={3} onSelect={() => logout()}>logout</NavItem>
        </Nav>
    </Navbar>
);
