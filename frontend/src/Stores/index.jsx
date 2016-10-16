
import App from 'Stores/App';
import Auth from 'Stores/Auth';
import TaskList from 'containers/TasksList/state';
import TaskDetails from 'containers/TaskDetails/state';
import TaskAdd from 'containers/TaskAdd/state';
import ProjectsList from 'containers/ProjectsList/state';

const createStores = (initState) => {
    const stores = {
        app: new App(),
        taskList: new TaskList(),
        taskDetails: new TaskDetails(),
        taskAdd: new TaskAdd(),
        projectsList: new ProjectsList(),
        auth: new Auth(),
    };

    return stores;
};

export default createStores;
