
import React, { Component } from 'react';

import { TaskTable } from './TaskTable/';

import { TaskFilter } from './TaskFilter/';
import { TaskPager } from './TaskPager/';

import Store from './state';

import { observer } from 'mobx-react';
import { connect } from 'react-redux';

// TODO: add global app state in mobx
import {
    getStatusesOptions,
    getUserOptions,
} from 'reduxApp/modules/app';

@connect(
    state => ({
        users: getUserOptions(state),
        statuses: getStatusesOptions(state),
    })
)
// -------------------
@observer
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.store = new Store();
    }
    componentDidMount() {
        this.store.showPage();
    }
    render() {
        const {
            users,
            statuses,
            params: { projectId },
        } = this.props;

        const {
            tasks,
            items,
            page,
            onSelect,
            makeSearch,
            userId, changeUserId,
            status, changeStatus,
        } = this.store;

        return (
            <div>
                <TaskFilter
                  makeSearch={makeSearch}
                  users={users}
                  userId={userId}
                  changeUserId={changeUserId}
                  statuses={statuses}
                  status={status}
                  changeStatus={changeStatus}
                />
                <TaskTable tasks={tasks} projectId={projectId} />
                <TaskPager items={items} activePage={page} onSelect={onSelect} />
            </div>
        );
    }
}


export default TaskList;
