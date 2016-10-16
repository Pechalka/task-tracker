import axios from 'axios';

import { observable } from 'mobx';
class Store {
    @observable versions = [];
    params = null;

    showPage = (params) => {
        this.params = params;
        this.getAllVersions();
    }

    getAllVersions = () => {
        return axios.get('/api/version')
            .then(response => {
                this.versions.replace(response.data);
            });
    }

    addVersion = () => {
        const title = prompt('Create new Version', '');
        axios.post('/api/version', { title })
            .then(() => this.getAllVersions());
    }

    addTask = (data) => {
        const { projectId } = this.params;
        axios.post('/api/tasks', data)
            .then(() => {
                window.location = `/projects/${projectId}/tasks`;
            });
    }
}

export default Store;
