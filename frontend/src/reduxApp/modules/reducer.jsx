import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

import { reducer as auth } from './auth';
import { reducer as projects } from './projects';

export default combineReducers({
    projects,
    auth,
    router: routerStateReducer,
    form: formReducer,
});
