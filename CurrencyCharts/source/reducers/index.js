import { combineReducers } from 'redux';

import currencies from './currenciesReducer';
import history from './historyReducer';

const rootReducer = combineReducers({
    currencies, history,
});

export default rootReducer;
