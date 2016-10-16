import axios from 'axios';
import { observable, computed } from 'mobx';

class App {
    @observable users = [];
    @observable statuses = ['new', 'inprogress', 'testing', 'complited'];

    @computed get getStatusesOptions() {
        return this.statuses.map(str => ({ value: str, label: str }));
    }

    @computed get getUserOptions() {
        return this.users.map(user => ({ value: user.id, label: user.name }));
    }

    appStart = () => {
        axios.get('/api/users')
            .then(response => {
                this.users.replace(response.data);
            });
    }
}

export default App;
