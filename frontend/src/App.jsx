import axios from 'axios';
import { observable, computed } from 'mobx';

class App {
    @observable users = [];
    @observable statuses = ['new', 'inprogress', 'testing', 'complited'];
    @observable currentUser = {};

    @computed get getStatusesOptions() {
        return this.statuses.map(str => ({ value: str, label: str }));
    }

    @computed get getUserOptions() {
        return this.users.map(user => ({ value: user.id, label: user.name }));
    }

    appStart = () => {
        this.loadUsers();
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
