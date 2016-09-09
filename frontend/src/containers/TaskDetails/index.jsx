import React from 'react';

import TaskInfo from './TaskInfo';
import AddComentForm from './AddComentForm';
import CommentsList from './CommentsList';

const TaskDetails = () => (
    <div>
        <TaskInfo />
        <AddComentForm />
        <CommentsList />
    </div>
);

import need from 'utils/need';
import { loadTask } from 'reduxApp/modules/tasks';

export default need(loadTask)(TaskDetails);
