
import axios from 'axios';
import { observable, action, computed } from 'mobx';

class Store {
    @observable projects = [];
    @observable popupOpen = false;

    showPage = () => {
        this.getAllProjects();
    }

    openPopup = () => {
        this.popupOpen = true;
    }

    closePopup = () => {
        this.popupOpen = false;
    }

    addProject = (title, userIds) => {
        return axios.post('/api/projects', { title })
            .then(() => this.getAllProjects())
            .then(() => this.closePopup());
    }

    removeProject = ({ id }) => {
        return axios.delete(`/api/projects/${id}`)
                .then(() => this.getAllProjects());
    }

    getAllProjects = () => {
        return axios.get('/api/projects')
                .then(response => {
                    this.projects.replace(response.data);
                });
    }
}


export default Store;
