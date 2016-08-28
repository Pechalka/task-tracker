import React, { Component } from 'react';
import { Link } from 'react-router';
import http from 'utils/http';

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
                <div>
                    <Link to={`/projects/${projectId}/tasks/${task.id}`}>{task.title}</Link>
                </div>
            );
        });
        return (
            <div>
                <h1>TaskList2</h1>
                <div>
                    {items}
                </div>
                <Link className='btn btn-default' to={`/projects/${projectId}/tasks/add`}>add</Link>
            </div>
        );
    }
}
