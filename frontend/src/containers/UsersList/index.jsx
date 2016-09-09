import React from 'react';

import UsersTable from './UsersTable';
import Main from 'components/Layouts/Main';
import DashboardMenu from 'containers/Application/DashboardMenu';

const UsersList = () => (
    <Main header={<DashboardMenu />}>
        <UsersTable />
    </Main>
);

import loading from 'containers/Application/loading';
import { fetchUsers } from 'reduxApp/modules/users';
export default loading(fetchUsers)(UsersList);
