import * as types from '../actions/currencyTypes';

// given state and action returns a new state
function currencyReducer(state = [], action) {
    switch(action) {
        case types.viewCurrency:
            return state;
        default:
            return state;
    }
};

export default currencyReducer;
