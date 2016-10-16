import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';

import 'react-select/dist/react-select.css';
import Select from 'react-select';

import './index.css';

import { observer } from 'mobx-react';

@observer(['taskAdd', 'app'])
class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { status: 'new', assignee: props.assignee, version: 'week1' };
    }

    add() {
        const { getUserOptions } = this.props.app;
        const { addTask } = this.props.taskAdd;
        const title = this.refs.input.getValue();
        const description = this.refs.description.getValue();
        const { status, assignee, version } = this.state;
        const assigneeUser = getUserOptions.find(user => user.value === assignee.value);

        addTask({
            title,
            description,
            status,
            assignee: assignee.value,
            version,
            assigneeName: assigneeUser.label,
        });
    }

    render() {
        const { getStatusesOptions, getUserOptions } = this.props.app;
        const { addVersion, versions } = this.props.taskAdd;

        const allVersion = versions.map(version => ({ value: version.title, label: version.title }));

        return (
            <div>
                <Input type='text' label='Title' ref='input' />
                <div className='form-group task-add-from__status'>
                    <label className='control-label'>Status</label>
                    <Select
                      value={this.state.status}
                      onChange={(status) => this.setState({ status })}
                      searchable={false}
                      clearable={false}
                      placeholder='-'
                      options={getStatusesOptions}
                    />
                </div>
                <div className='form-group task-add-from__user-select'>
                    <label className='control-label'>Assignee</label>
                    <Select
                      value={this.state.assignee}
                      onChange={assignee => this.setState({ assignee })}
                      placeholder='-'
                      options={getUserOptions}
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

export default TaskAddForm;
