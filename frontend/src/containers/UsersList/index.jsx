import React from 'react';

import UsersTable from './UsersTable';
import Main from 'components/Layouts/Main';
import DashboardMenu from 'containers/Application/DashboardMenu';

const UsersList = () => (
    <Main header={<DashboardMenu />}>
        <UsersTable />
    </Main>
);

import need from 'utils/need';
import { fetchUsers } from 'reduxApp/modules/users';
export default need(fetchUsers)(UsersList);
