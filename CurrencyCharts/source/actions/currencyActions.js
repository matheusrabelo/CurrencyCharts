import moment from 'moment';

import * as constants from '../constants';
import ExternalAPI from '../apis/externalAPI';

const externalAPI = new ExternalAPI();

export function loadCurrenciesSuccess(currencies) {
    return { type: constants.LOAD_CURRENCIES_SUCCESS, currencies };
}

export function loadHistorySuccess(history) {
    return { type: constants.LOAD_HISTORY_SUCCESS, history };
}

export function loadCurrencies() {
    return function(dispatch) {
        return externalAPI.getCurrentSupportedCurrencies()
            .then((result) => {
                const currencies = Object.keys(result.currencies)
                    .map((title) => ({
                        title,
                        name: result.currencies[title],
                    }));
                dispatch(loadCurrenciesSuccess(currencies));
            })
            .catch((error) => console.log(error));
    };
}

export function loadHistory(currency) {
    const finalDate = moment().format('YYYY-MM-DD');
    const startDate = moment(finalDate)
        .subtract(1, 'weeks')
        .format('YYYY-MM-DD');
    return function(dispatch) {
        return externalAPI.getHistory(currency, startDate, finalDate)
            .then((result) =>
                dispatch(loadHistorySuccess(result)))
            .catch((error) => console.log(error));
    };
}
