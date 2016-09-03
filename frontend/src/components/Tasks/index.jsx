import React, { Component } from 'react';

import { Button, Input } from 'react-bootstrap';
import { Link } from 'react-router';

import { Table } from 'react-bootstrap';

class AddComentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    addComment() {
        this.props.addComment(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <form>
                    <Input
                      value={this.state.value}
                      onChange={(e) => this.onChange(e)}
                      type='textarea'
                      label='comment'
                    />
                    <Button onClick={() => this.addComment()}>add coment</Button>
                </form>
            </div>
        );
    }
}


const CommentsList = ({ comments, removeComent }) => (
    <div>
        {comments.map(comment => (
            <div key={comment.id}>
                <h4>
                    <span>{comment.userName}</span>
                    <Button bsStyle='link' bsSize='xsmall' onClick={() => removeComent(comment)}>remove</Button>
                </h4>

                <p>{comment.text}</p>
                <hr />
            </div>
        ))}
    </div>
);

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

const TaskTable = ({ tasks, projectId }) => (
    <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Assignee</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
            {tasks.map(task => (
                <tr key={task.id}>
                    <td>
                        <Link to={`/projects/${projectId}/tasks/${task.id}`}>{task.title}</Link>
                    </td>
                    <td>
                        {task.status}
                    </td>
                    <td>
                        {task.assigneeName}
                    </td>
                    <td>
                        {task.version}
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);

export {
    AddComentForm,
    CommentsList,
    TaskInfo,
    TaskTable,
};
