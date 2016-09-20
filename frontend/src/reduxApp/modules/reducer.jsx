import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

import { reducer as auth } from './auth';
import { reducer as projects } from './projects';
import { reducer as tasks } from './tasks';
import { reducer as users } from './users';
import { reducer as comments } from './comments';
import { reducer as taskFilter } from './taskFilter';
import { reducer as uiReducer } from 'redux-ui';

export default combineReducers({
    taskFilter,
    comments,
    users,
    projects,
    tasks,
    auth,
    router: routerStateReducer,
    form: formReducer,
    ui: uiReducer,
});
