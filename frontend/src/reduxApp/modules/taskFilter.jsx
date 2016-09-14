
const initState = {
    userId: null,
    status: 'new',
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'CHANGE_TASK_FILTER': {
            const { field, value } = action.payload;
            return { ...state, [field]: value };
        }

        default:
            return state;
    }
}

import { setPage, loadTasks } from 'reduxApp/modules/tasks';


export function changeFilter(field, value) {
    return {
        type: 'CHANGE_TASK_FILTER',
        payload: { field, value },
    };
}

export function findTask() {
    return (dispatch) => {
        dispatch(setPage(1));
        dispatch(loadTasks());
    };
}
