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

import loading from 'containers/Application/loading';
import { loadTask } from 'reduxApp/modules/tasks';
import { loadComments } from 'reduxApp/modules/comments';

export default loading([loadTask, loadComments])(TaskDetails);
