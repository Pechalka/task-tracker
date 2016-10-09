
import React from 'react';
import Select from 'react-select';

export const UserSelect = ({ users, userId, changeUserId }) => (
    <Select
      value={userId || ''}
      onChange={newValue => changeUserId(newValue.value || null)}
      searchable={false}
      clearable={false}
      options={users.concat([{ value: '', label: 'All' }])}
    />
);

