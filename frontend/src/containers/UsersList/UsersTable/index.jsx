import React from 'react';
import { Table, Button } from 'react-bootstrap';

import { observer } from 'mobx-react';

export default observer(['app', 'auth'], ({
    app: { users, removeUser },
    auth: { userId },
}) => {
    return (
        <div>
            <h2>All users</h2>
            <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                <div className='text-center'>
                                <Button
                                  disabled={user.id === userId}
                                  onClick={() => removeUser(user)}
                                >remove</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
});

