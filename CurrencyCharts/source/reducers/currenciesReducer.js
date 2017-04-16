import * as constants from '../constants';

function currenciesReducer(state = [], action) {
    switch(action.type) {
        case constants.LOAD_CURRENCIES_SUCCESS:
            return action.currencies;
        default:
            return state;
    }
};

export default currenciesReducer;
