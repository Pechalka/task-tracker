import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export default class DashboardMenu extends Component {
    render() {
        const {
            logout,
            addProject,
        } = this.props;
        return (
            <Navbar>
                <NavBrand>
                    <Link to='/'>Task-tracker</Link>
                </NavBrand>
                <Nav>
                    <NavItem eventKey={2} onClick={this.props.addProject}>add project</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={3} onSelect={() => logout()}>logout</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
