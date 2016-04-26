import * as types from '../constants/SearchActionTypes';
import repoSearch from '../api/RepoSearch';
import _ from 'lodash';

function searchWithRepoAPI(keyword, dispatch) {
    repoSearch(keyword, (data) => {
        dispatch({
            type: types.SEARCH_DONE,
            repos: data.items.slice(0, 3),
            visibleList: true,
            keyword
        });
    });
}

export function searchRepoAction(keyword) {
    return (dispatch) => {
        searchWithRepoAPI(keyword, dispatch);
    };
}

export function showList() {
    return (dispatch) => {
        dispatch({
            type: types.SHOW_LIST
        });
    };
}
export function hideList() {
    return (dispatch) => {
        dispatch({
            type: types.HIDE_LIST
        });
    };
}

export function chooseRepoAction(id, repos) {
    return (dispatch) => {
        dispatch({
            type: types.REPO_CHOSEN,
            item: _.filter(repos, function (repo) {
                return repo.id == id
            })[0],
            visibleList: false
        });
    };
}
