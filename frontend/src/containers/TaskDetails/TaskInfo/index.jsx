
import { connect } from 'react-redux';

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const TaskInfo = ({ task: { title, description }, deleteTask }) => (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
        <Button onClick={() => deleteTask()}>Delete</Button>
    </div>
);

TaskInfo.propTypes = {
    task: PropTypes.object,
    deleteTask: PropTypes.func,
};

import { deleteTask } from '../state';

export default connect(
    state => ({
        task: state.tasksDetails.task,
    }),
    { deleteTask }
)(TaskInfo);


