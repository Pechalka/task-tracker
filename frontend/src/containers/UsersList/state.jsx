
const deleteUser = (id) => ({
    type: 'DELETE_USER',
    payload: {
        request: {
            url: `/api/users/${id}`,
            method: 'delete',
        },
    },
});

import { loadUsers } from 'reduxApp/modules/app';

export const removeUser = ({ id }) => (dispatch) =>
    dispatch(deleteUser(id)).then(dispatch(loadUsers()));
