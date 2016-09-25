import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

import './index.scss';

import cx from 'classnames';

const SortableTh = ({ children, active, asc, onClick }) => (
    <th className={cx('sortabel')} onClick={onClick}>
        <span>{children}</span>
        {active && <span>{asc ? '(asc)' : '(dest)'}</span>}
    </th>
);


const TaskTable = ({ tasks, projectId, toggleSort, sortField, sortDirection }) => (
    <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <SortableTh
              active={sortField === 'assigneeName'}
              asc={sortDirection === 'asc'}
              onClick={() => toggleSort('assigneeName')}
            >Assignee</SortableTh>
            <th>Version</th>
            <SortableTh
              active={sortField === 'createAt'}
              asc={sortDirection === 'asc'}
              onClick={() => toggleSort('createAt')}
            >createAt</SortableTh>
          </tr>
        </thead>
        <tbody>
            {tasks.map(task => (
                <tr key={task.id}>
                    <td>
                        <Link to={`/projects/${projectId}/tasks/${task.id}`}>{task.title}</Link>
                    </td>
                    <td>
                        {task.status}
                    </td>
                    <td>
                        {task.assigneeName}
                    </td>
                    <td>
                        {task.version}
                    </td>
                    <td>
                        {task.createAt}
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);

TaskTable.propTypes = {
    tasks: PropTypes.array,
    projectId: PropTypes.string,
    toggleSort: PropTypes.func,
};

export default TaskTable;
