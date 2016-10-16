import axios from 'axios';
import { observable, computed } from 'mobx';

class App {
    @observable users = [];
    @computed get getUserOptions() {
        return this.users.map(user => ({ value: user.id, label: user.name }));
    }

    @observable statuses = ['new', 'inprogress', 'testing', 'complited'];
    @computed get getStatusesOptions() {
        return this.statuses.map(str => ({ value: str, label: str }));
    }

    @observable currentUser = null;
    @computed get userId() {
        if (!this.currentUser) return null;

        return this.currentUser.id;
    }

    appStart = () => {
        return this.loadUsers();
    }

    loadUsers = () => {
        return axios.get('/api/users')
            .then(response => {
                this.users.replace(response.data);
            });
    }

    removeUser = ({ id }) => {
        return axios.delete(`/api/users/${id}`)
                .then(() => this.loadUsers());
    }
}

export default App;
