import React, { Component } from 'react';
import { Link } from 'react-router';
import http from 'utils/http';

import { Table } from 'react-bootstrap';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    componentDidMount() {
        http.get('/api/tasks').then(json => {
            this.setState({
                tasks: json,
            });
        });
    }

    render() {
        const { params: { projectId } } = this.props;
        const items = this.state.tasks.map(task => {
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
