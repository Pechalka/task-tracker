import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';

class TaskAdd extends Component {
    add() {
        const { addTask } = this.props;
        const title = this.refs.input.getValue();
        const description = this.refs.description.getValue();
        const status = this.refs.status.getValue();
        addTask({
            title,
            description,
            status,
        });
    }

    render() {
        const { statuses } = this.props;
        const options = statuses.map(status => (
            <option key={status} value={status}>{status}</option>
        ));
        return (
            <div>
                <Input type='text' label='Title' ref='input' />
                <Input type='select' label='Status' placeholder='select' ref='status'>
                    {options}
                </Input>
                <Input type='textarea' label='Description' ref='description' />

                <Button onClick={() => this.add()}>add</Button>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { addTask } from 'reduxApp/modules/tasks';

export default connect(
    state => ({
        statuses: state.tasks.statuses,
    })
, { addTask })(TaskAdd);
