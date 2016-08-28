import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import http from 'utils/http';

export default class TaskAdd extends Component {
    add() {
        const { params: { projectId } } = this.props;
        const title = this.refs.input.value;
        http.post('/api/tasks', { title }).then(() => {
            this.props.history.push(`/projects/${projectId}/tasks`);
        });
    }

    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <Button onClick={this.add.bind(this)}>add</Button>
            </div>
        );
    }
}
