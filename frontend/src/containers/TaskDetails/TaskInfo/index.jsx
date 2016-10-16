
import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import { observer } from 'mobx-react';

const TaskInfo = observer(['taskDetails'], ({
    taskDetails: { task: { title, description }, deleteTask },
    projectId,
}) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </div>
            <Button onClick={() => deleteTask(projectId)}>Delete</Button>
        </div>
    );
});


TaskInfo.propTypes = {
    task: PropTypes.object,
    deleteTask: PropTypes.func,
};

export default TaskInfo;


