import React, { Component } from 'react';
import { Button, Input } from 'react-bootstrap';
import http from 'utils/http';




class AddComentForm extends Component {
    addComment() {
        this.props.addComment(this.refs.comment.getValue());
        this.refs.comment.setValue('');
    }

    render() {
        return (
            <div>
                <form>
                    <Input type='textarea' label='comment' ref='comment' />
                    <Button onClick={() => this.addComment()}>add coment</Button>
                </form>
            </div>
        );
    }
}

const CommentsList = ({ comments }) => (
    <div>
        {comments.map(comment => (
            <div>
                <h4>{comment.userName}</h4>
                <p>{comment.text}</p>
            </div>
        ))}
    </div>
);

export default class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: null,
            comments: [{ text: 'test', userName: 'vasa'}],
        };
    }

    removeTask() {
        const id = this.props.params.id;
        const projectId = this.props.params.projectId;
        http.del(`/api/tasks/${id}`).then(() => {
            this.props.history.push(`/projects/${projectId}/tasks`);
        });
    }

    componentDidMount() {
        const id = this.props.params.id;
        http.get(`/api/tasks/${id}`).then(data => this.setState({ task: data }));
        this.loadComments();
    }

    loadComments() {
        return http.get('/api/comments').then(json => this.setState({ comments: json }));
    }

    addComment(text) {
        http.post('/api/comments', { text, userName: 'vasa' }).then(() => this.loadComments());
    }

    render() {
        if (!this.state.task) return (<div>loading...</div>);

        const {
            title,
            description,
        } = this.state.task;

        return (
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>
                </div>
                <Button onClick={this.removeTask.bind(this)}>Delete</Button>
                <AddComentForm addComment={this.addComment.bind(this)} />
                <CommentsList comments={this.state.comments} />
            </div>
        );
    }
}
