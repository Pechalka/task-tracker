
import React from 'react';
import Select from 'react-select';

import { observer } from 'mobx-react';

export const StatusSelect = observer(['taskList', 'app'], ({
    taskList: { status, changeStatus },
    app: { getStatusesOptions },
}) => {
    console.log('render status');
    return (
        <Select
          value={status}
          onChange={newValue => changeStatus(newValue.value)}
          searchable={false}
          clearable={false}
          options={getStatusesOptions}
        />
    );
});

