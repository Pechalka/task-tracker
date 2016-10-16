
const toParams = (obj) => Object.keys(obj)
    .filter(key => !!obj[key])
    .map(key => `${key}=${obj[key]}`)
    .join('&');


import axios from 'axios';
import { observable, action, computed } from 'mobx';

class Store {
    @observable userId = null;
    @observable status = 'new';

    @observable tasks = [];
    @observable page = 1;
    @observable items = 0;

    @action showPage = () => {
        const {
            page,
            userId,
            status,
        } = this;

        const query = toParams({
            assignee: userId,
            status,
        });
        return axios.get(`/api/tasks/page/${page}/5?${query}`).then(response => {
            const { items, count } = response.data;
            this.tasks.replace(items);
            this.items = Math.ceil(count / 10);
        });
    }

    onSelect = (page) => {
        this.page = page;
        this.showPage();
    }

    makeSearch = () => {
        this.page = 1;
        this.showPage();
    }

    changeUserId = (userId) => {
        this.userId = userId;
    }

    changeStatus = (status) => {
        this.status = status;
    }
}


export default Store;

