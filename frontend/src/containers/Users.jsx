import React from 'react';
import { connect } from 'react-redux';
import { UsersTable } from 'components/Users/';
import { removeUser } from 'reduxApp/modules/users';

const UsersTableContainer = connect(
    state => ({
        users: state.users.users,
        currentUser: state.auth.user,
    }),
    { removeUser }
)(UsersTable);

export {
    UsersTableContainer,
};
