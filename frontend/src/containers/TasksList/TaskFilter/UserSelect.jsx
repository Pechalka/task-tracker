
import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const UserSelect = ({ users, userId, changeUserId }) => (
    <Select
      value={userId || ''}
      onChange={newValue => changeUserId(newValue.value || null)}
      searchable={false}
      clearable={false}
      options={users.concat([{ value: '', label: 'All' }])}
    />
);

import { changeUserId } from '../state';

import {
    getUserOptions,
} from 'reduxApp/modules/app';


export default connect(
    state => ({
        users: getUserOptions(state),
        userId: state.tasksList.userId,
    }),
    { changeUserId },
)(UserSelect);
