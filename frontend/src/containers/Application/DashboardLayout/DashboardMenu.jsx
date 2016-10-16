
import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import { observer } from 'mobx-react';

const DashboardMenu = observer(['projectsList', 'auth'], ({
    auth: { logout },
    projectsList: { openPopup },
}) => (
    <Navbar>
        <NavBrand>
            <Link to='/'>Task-tracker</Link>
        </NavBrand>
        <Nav>
            <NavItem eventKey={2} onClick={openPopup}>add project</NavItem>
            <LinkContainer to='/users'>
                <NavItem eventKey={1}>users</NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={3} onSelect={() => logout()}>logout</NavItem>
        </Nav>
    </Navbar>
));

import { connect } from 'react-redux';

import { logout } from 'reduxApp/modules/auth';

export default connect(
    null,
    { logout }
)(DashboardMenu);
