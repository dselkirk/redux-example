import * as types from '../constants/SearchActionTypes';

const initialState = {
    repos: [],
    visibleList: true
};

export default function searchRepos(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_DONE:
            return {
                ...state,
                repos: action.repos,
                keyword: action.keyword
            };
        case types.HIDE_LIST:
            return {
                ...state,
                visibleList: false
            };
        case types.SHOW_LIST:
            return {
                ...state,
                visibleList: true
            };
        default:
            return state;
    }
}
