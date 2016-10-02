import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

import { reducer as auth } from './auth';
import { reducer as app } from './app';
import { reducer as tasksAdd } from 'containers/TaskAdd/state';
import { reducer as tasksList } from 'containers/TasksList/state';
import { reducer as tasksDetails } from 'containers/TaskDetails/state';
import { reducer as projectsList } from 'containers/ProjectsList/state';

export default combineReducers({
    app,
    tasksDetails,
    tasksList,
    projectsList,
    tasksAdd,

    auth,
    router: routerStateReducer,
    form: formReducer,
});
