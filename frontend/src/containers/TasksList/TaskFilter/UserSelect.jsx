
import React from 'react';
import Select from 'react-select';

import { observer } from 'mobx-react';

export const UserSelect = observer(['taskList', 'app'], ({
    taskList: { userId, changeUserId },
    app: { getUserOptions },
}) => {
    return (
        <Select
          value={userId || ''}
          onChange={newValue => changeUserId(newValue.value || null)}
          searchable={false}
          clearable={false}
          options={getUserOptions.concat([{ value: '', label: 'All' }])}
        />
    );
});

