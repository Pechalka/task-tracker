import { connect } from 'react-redux';
import UsersTableComponent from 'components/UsersTable/';
import { removeUser } from 'reduxApp/modules/users';

const UsersTable = connect(
    state => ({
        users: state.users.users,
        currentUser: state.auth.user,
    }),
    { removeUser }
)(UsersTableComponent);

export default UsersTable;
