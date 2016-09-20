import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const DashboardMenu = ({
    logout,
    addProject,
}) => (
    <Navbar>
        <NavBrand>
            <Link to='/test'>Task-tracker</Link>
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

export default DashboardMenu;
