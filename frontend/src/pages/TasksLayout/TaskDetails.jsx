import React from 'react';


import { TaskInfoContainer, CommentsListContainer, AddComentFormContainer } from 'containers/tasks';


const TaskDetails = () => (
    <div>
        <TaskInfoContainer />
        <AddComentFormContainer />
        <CommentsListContainer />
    </div>
);

import need from 'utils/need';
import { loadTask } from 'reduxApp/modules/tasks';

export default need(loadTask)(TaskDetails);
