
import React, { Component } from 'react';

import { TaskTable } from './TaskTable/';

import { TaskFilter } from './TaskFilter/';
import { TaskPager } from './TaskPager/';

import { observer } from 'mobx-react';

@observer(['taskList'])
class TaskList extends Component {

    componentDidMount() {
       this.props.taskList.showPage();
    }

    render() {
        const {
            params: { projectId },
        } = this.props;

        return (
            <div>
                <TaskFilter />
                <TaskTable projectId={projectId} />
                <TaskPager />
            </div>
        );
    }
}


export default TaskList;
