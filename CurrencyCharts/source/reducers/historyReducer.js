import * as constants from '../constants';

function historyReducer(state = [], action) {
    switch(action.type) {
        case constants.LOAD_HISTORY_SUCCESS:
            return action.history;
        default:
            return state;
    }
};

export default historyReducer;
