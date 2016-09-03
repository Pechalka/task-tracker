
import { connect } from 'react-redux';
import { removeTask, addComment, removeComent } from 'reduxApp/modules/tasks';

import { AddComentForm, CommentsList, TaskInfo, TaskTable } from 'components/Tasks/';


const TaskInfoContainer = connect(
    state => ({
        task: state.tasks.task,
    }),
    { removeTask }
)(TaskInfo);

const CommentsListContainer = connect(
    state => ({
        comments: state.tasks.comments,
    }),
    { removeComent }
)(CommentsList);

const AddComentFormContainer = connect(
    null,
    { addComment }
)(AddComentForm);

const TaskTableContainer = connect(
    state => ({
        tasks: state.tasks.tasks,
        projectId: state.router.params.projectId,
    })
)(TaskTable);

export {
    TaskInfoContainer,
    CommentsListContainer,
    AddComentFormContainer,
    TaskTableContainer,
};
