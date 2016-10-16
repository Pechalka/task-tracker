import React, { Component } from 'react';
import TaskAddForm from './TaskAddForm/';

import { observer } from 'mobx-react';

@observer(['taskAdd'])
class TaskAdd extends Component {
    componentDidMount() {
        const {
            params,
            taskAdd,
        } = this.props;

        taskAdd.showPage(params);
    }
    render() {
        return (
            <div>
                <TaskAddForm />
            </div>
        );
    }
}

export default TaskAdd;
