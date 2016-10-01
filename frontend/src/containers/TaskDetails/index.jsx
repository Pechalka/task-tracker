import React from 'react';

import TaskInfo from './TaskInfo/';
import AddComentForm from './AddComentForm/';
import CommentsList from './CommentsList/';

const TaskDetails = () => (
    <div>
        <TaskInfo />
        <AddComentForm />
        <CommentsList />
    </div>
);

import loading from 'containers/Application/loading';
import { showPage } from './state';

export default loading([showPage])(TaskDetails);
