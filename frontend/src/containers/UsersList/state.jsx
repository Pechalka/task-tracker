
import http from 'utils/http';
import { loadUsers } from 'reduxApp/modules/app';

export const removeUser = ({ id }) => (dispatch) =>
    http.del(`/api/users/${id}`).then(dispatch(loadUsers()));
