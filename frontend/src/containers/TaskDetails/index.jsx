import React, { Component } from 'react';

import TaskInfo from './TaskInfo/';
import AddComentForm from './AddComentForm/';
import CommentsList from './CommentsList/';

import { observer } from 'mobx-react';

@observer(['taskDetails'])
class TaskDetails extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        const {
            params,
            taskDetails,
        } = this.props;

        taskDetails.showPage(params).then(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        const {
            params: { projectId, id },
        } = this.props;

        return (
            <div>
                {!this.state.loading && <div>
                    <TaskInfo projectId={projectId} />
                    <AddComentForm taskId={id} />
                    <CommentsList taskId={id} />
                </div>}
            </div>
        );
    }
}

export default TaskDetails;
