
import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

const StatusSelect = ({ statuses, status, changeStatus }) => (
    <Select
      value={status}
      onChange={newValue => changeStatus(newValue.value)}
      searchable={false}
      clearable={false}
      options={statuses}
    />
);

import { changeStatus } from '../state';


import {
    getStatusesOptions,
} from 'reduxApp/modules/app';


export default connect(
    state => ({
        statuses: getStatusesOptions(state),
        status: state.tasksList.status,
    }),
    { changeStatus },
)(StatusSelect);
