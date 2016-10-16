import axios from 'axios';
import { observable, computed } from 'mobx';

class App {
    @observable user = null;
    @computed get userId() {
        if (!this.user) return null;

        return this.user.id;
    }

    @computed get isAuthenticated() {
        return !!this.user;
    }


    checkAuth = () => {
        return axios.get('/api/session')
            .then((response) => {
                this.user = response.data;
            })
            .catch(() => this.logout());
    }


    login = (form) => {
        return axios.post('/api/login', form)
                .then(response => {
                    this.user = response.data;
                    window.location = '/';
                });
    }

    registr = (form) => {
        return axios.post('/api/users', form)
                .then(response => this.login(response.data));
    }

    logout = () => {
        return axios.delete('/api/session')
                .then(() => {
                    this.user = null;
                    window.location = '/login';
                });
    }
}

export default App;
