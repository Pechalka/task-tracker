
import React from 'react';
import Select from 'react-select';

export const StatusSelect = ({ statuses, status, changeStatus }) => (
    <Select
      value={status}
      onChange={newValue => changeStatus(newValue.value)}
      searchable={false}
      clearable={false}
      options={statuses}
    />
);

