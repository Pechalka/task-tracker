import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const TaskInfo = ({ task: { title, description }, removeTask }) => (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
        <Button onClick={() => removeTask()}>Delete</Button>
    </div>
);

TaskInfo.propTypes = {
    task: PropTypes.object,
    removeTask: PropTypes.func,
};


export default TaskInfo;
