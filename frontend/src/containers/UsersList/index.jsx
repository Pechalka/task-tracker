import React from 'react';

import UsersTable from './UsersTable/';

const UsersList = () => (
    <div>
        <UsersTable />
    </div>
);

import loading from 'HOC/loading';
export default loading([])(UsersList);
