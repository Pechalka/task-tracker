import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

import { observer } from 'mobx-react';

export const TaskTable = observer(({ tasks, projectId }) => (
    <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Version</th>
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
                </tr>
            ))}
        </tbody>
    </Table>
));

TaskTable.propTypes = {
    tasks: PropTypes.array,
    projectId: PropTypes.string,
};

