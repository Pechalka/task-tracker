import React, { Component } from 'react';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class TaskList extends Component {
    componentDidMount() {
        this.props.loadTasks();
    }

    render() {
        const {
            params: { projectId },
            tasks,
        } = this.props;

        const items = tasks.map(task => {
            return (
                <tr key={task.id}>
                    <td>
                        <Link to={`/projects/${projectId}/tasks/${task.id}`}>{task.title}</Link>
                    </td>
                    <td>
                        {task.status}
                    </td>
                </tr>
            );
        });
        return (
            <div>
                <Table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { loadTasks } from 'reduxApp/modules/tasks';

export default connect(
    state => ({
        tasks: state.tasks.tasks,
    }),
    { loadTasks }
)(TaskList);
