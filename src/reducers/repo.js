import * as types from '../constants/SearchActionTypes';

const initialState = {
    repo: {}
};

export default function chooseRepo(state = initialState, action) {
    switch (action.type) {
        case types.REPO_CHOSEN:
            return {
                ...state,
                repo: action.item
            };
        default:
            return state;
    }
}