
import axios from 'axios';

import { observable } from 'mobx';
class Store {
    @observable task = null;
    @observable comments = [];

    showPage = ({ id }) => {
        return Promise.all([
            this.loadComments(id),
            this.loadTask(id),
        ]);
    }

    loadTask = (id) => {
        return axios.get(`/api/tasks/${id}`)
            .then(response => {
                this.task = response.data;
            });
    }

    deleteTask = (projectId) => {
        const { id } = this.task;
        axios.delete(`/api/tasks/${id}`)
            .then(() => {
                window.location = `/projects/${projectId}/tasks`;
            });
    }

    addComment = (taskId, text) => {
        axios.post(`/api/tasks/${taskId}/comments`, { text, userName: 'vasa' })
            .then(() => this.loadComments(taskId));
    }

    loadComments = (taskId) => {
        return axios.get(`/api/tasks/${taskId}/comments/page/0/5`)
            .then((response) => {
                this.comments.replace(response.data.items);
            });
    }

    deleteComment = (taskId, comment) => {
        axios.delete(`/api/tasks/${taskId}/comments/${comment.id}`)
            .then(() => this.loadComments(taskId));
    }
}

export default Store;
