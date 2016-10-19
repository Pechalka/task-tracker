
const initState = {
    show: false,
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'OPEN_POPUP':
            return { ...state, show: true };

        case 'CLOSE_POPUP':
            return { ...state, show: false };

        default:
            return state;
    }
}

export const open = () => ({ type: 'OPEN_POPUP' });
export const close = () => ({ type: 'CLOSE_POPUP' });

