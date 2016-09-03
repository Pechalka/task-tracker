import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';

import 'react-select/dist/react-select.css';
import Select from 'react-select';

class TaskAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { status: 'new', assignee: props.assignee, version: 'week1' };
    }

    add() {
        const { addTask, users } = this.props;
        const title = this.refs.input.getValue();
        const description = this.refs.description.getValue();
        const { status, assignee, version } = this.state;
        const assigneeUser = users.find(user => user.id === assignee);

        addTask({
            title,
            description,
            status,
            assignee,
            version,
            assigneeName: assigneeUser.name,
        });
    }

    render() {
        const { statuses, users, addVersion, versions } = this.props;
        const options = statuses.map(status => (
            { value: status, label: status }
        ));

        const allUsers = users.map(user => (
            { value: user.id, label: user.name })
        );

        const allVersion = versions.map(version => ({ value: version.title, label: version.title }));

        return (
            <div>
                <Input type='text' label='Title' ref='input' />
                <div className='form-group'>
                    <label className='control-label'>Status</label>
                    <Select
                      value={this.state.status}
                      onChange={(status) => this.setState({ status })}
                      searchable={false}
                      clearable={false}
                      placeholder='-'
                      options={options}
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Assignee</label>
                    <Select
                      value={this.state.assignee}
                      onChange={assignee => this.setState({ assignee })}
                      placeholder='-'
                      options={allUsers}
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Target Version</label>
                    <div className='input-group' >
                        <span className='form-control' style={{ padding: 0, border: 'none' }}>
                            <Select
                              value={this.state.version}
                              searchable={false}
                              clearable={false}
                              onChange={version => this.setState({ version: version.value })}
                              options={allVersion}
                            />
                        </span>
                        <span className='input-group-btn'>
                            <Button onClick={addVersion}>
                                <i className='glyphicon glyphicon-plus'></i>
                            </Button>
                        </span>
                    </div>
                </div>
                <Input type='textarea' label='Description' ref='description' />

                <Button onClick={() => this.add()}>add</Button>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { addTask, addVersion, showAddTaskForm } from 'reduxApp/modules/tasks';

import need from 'utils/need';

export default connect(
    state => ({
        statuses: state.tasks.statuses,
        users: state.users.users,
        versions: state.tasks.versions,
        assignee: state.auth.user ? state.auth.user.id : null,
    })
, { addTask, addVersion })(need(showAddTaskForm)(TaskAdd));
