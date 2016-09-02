import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';
import http from 'utils/http';


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
                    <Input value={this.state.value} onChange={(e) => this.onChange(e)} type='textarea' label='comment' ref='comment' />
                    <Button onClick={() => this.addComment()}>add coment</Button>
                </form>
            </div>
        );
    }
}

const CommentsList = ({ comments }) => (
    <div>
        {comments.map(comment => (
            <div key={comment.id}>
                <h4>{comment.userName}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
);

class TaskDetails extends Component {

    componentDidMount() {
        this.props.loadTask();
    }

    render() {
        const {
            task,
            comments,
            addComment,
        } = this.props;

        if (!task) return (<div>loading...</div>);

        const {
            title,
            description,
        } = task;

        return (
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>
                <Button onClick={() => this.props.removeTask()}>Delete</Button>
                <AddComentForm addComment={(text) => this.props.addComment(text)} />
                <CommentsList comments={comments} />
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { removeTask, loadTask, addComment } from 'reduxApp/modules/tasks';

export default connect(
    state => ({
        task: state.tasks.task,
        comments: state.tasks.comments,
    }),
    { removeTask, loadTask, addComment }
)(TaskDetails);
