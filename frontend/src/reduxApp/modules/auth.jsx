
const initState = {
    user: null,
};

export const LOGIN = 'LOGIN';

export function reduce(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return state;

        default:
            return state;
    }
}

export function login(form) {
    return (dispatch) => {
        dispatch({ type: LOGIN });
    };
}
// TODO
