
const initState = {
    items: [],
    item: null,

    page: 1,
    totalPages: 1,
};

export function reducer(state = initState, action) {
    switch (action.type) {
        case 'ITEMS_LOADED': {
            return { ...state, items: action.payload };
        }

        case 'SET_ITEMS_PAGE': {
            const { count, items } = action.payload;
            return { ...state, items, totalPages: Math.ceil(count / 10) };
        }

        case 'SET_ITEM': {
            return { ...state, item: action.payload };
        }

        case 'SET_PAGE':
            return { ...state, page: action.payload };

        default:
            return state;
    }
}

import http, { toParams } from 'utils/http';

function _getPage(url, params = {}) {
    return (dispatch, getState) => {
        const page = getState().rest.tasks.page;
        const query = toParams(params);
        return http.get(`/api/tasks/page/${page}/5?${query}`)
                .then(payload => {
                    dispatch({ type: 'SET_ITEMS_PAGE', payload });
                });
    };
}

const setItems = (items) => ({ type: 'ITEMS_LOADED', payload: items });

function _loadAll(url) {
    return (dispatch) => {
        http.get(url).then(data => {
            dispatch(setItems(data));
        });
    };
}

function _loadOne(url, id) {
    return (dispatch) => {
        return http.get(`${url}/${id}`).then(data => {
            dispatch({ type: 'SET_ITEM', payload: data });
        });
    };
}

// http.del(`/api/tasks/${id}/comments/${comment.id}`)

function _create(url, data) {
    return () => http.post(url, data);
}

function _remove(url, item) {
    return () => http.del(`${url}/${item.id}`);
}

const setPage = (page) => ({ type: 'SET_PAGE', payload: page });

import { wrapDispatch as wd } from 'multireducer';

export function getActions(url, name) {
    let _url = url;
    return {
        setUrl: (newUrl) => {
            _url = newUrl;
            return _url;
        },
        changePage: (page) => (dispatch) => {
            dispatch(setPage(page));
            return dispatch(_getPage(_url));
        },
        getPage: (params) => dispatch => wd(dispatch, name)(_getPage(_url, params)),
        loadAll: (params) => dispatch => wd(dispatch, name)(_loadAll(_url, params)),
        loadOne: (id) => dispatch => wd(dispatch, name)(_loadOne(_url, id)),
        create: (data) => dispatch => wd(dispatch, name)(_create(_url, data)),
        remove: (item) => dispatch => wd(dispatch, name)(_remove(_url, item)),
    };
}


