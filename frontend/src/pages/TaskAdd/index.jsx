import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';
import http from 'utils/http';

export default class TaskAdd extends Component {
    add() {
        const { params: { projectId } } = this.props;
        const title = this.refs.input.getValue();
        const description = this.refs.description.getValue();
        const status = this.refs.status.getValue();
        http.post('/api/tasks', { title, description, status }).then(() => {
            this.props.history.push(`/projects/${projectId}/tasks`);
        });
    }

    render() {
        const statuses = ['new', 'inprogress', 'testing', 'complited'];
        const options = statuses.map(status => <option key={status} value={status}>{status}</option>);
        return (
            <div>
                <Input type='text' label='Title' ref='input' />
                <Input type='select' label='Status' placeholder='select' ref='status'>
                    {options}
                </Input>
                <Input type='textarea' label='Description' ref='description' />

                <Button onClick={this.add.bind(this)}>add</Button>
            </div>
        );
    }
}
