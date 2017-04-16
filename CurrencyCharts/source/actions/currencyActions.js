import moment from 'moment';

import * as constants from '../constants';
import ExternalAPI from '../apis/externalAPI';

export function loadCurrenciesSuccess(currencies) {
    return { type: constants.LOAD_CURRENCIES_SUCCESS, currencies };
}

export function loadHistorySuccess(history) {
    return { type: constants.LOAD_HISTORY_SUCCESS, history };
}

export function loadCurrencies() {
    return function(dispatch) {
        return ExternalAPI.getCurrentSupportedCurrencies()
            .then((result) => {
                let currencies = [];
                for (let key in result.currencies) {
                    if (result.currencies.hasOwnProperty(key)) {
                            currencies.push({
                            title: key,
                            name: result.currencies[key],
                        });
                    }
                }
                dispatch(loadCurrenciesSuccess(currencies));
            })
            .catch((error) => console.log(error));
    };
}

export function loadHistory(currency) {
    const finalDate = moment().format('YYYY-MM-DD');
    const startDate = moment(finalDate)
        .subtract(1, 'years')
        .format('YYYY-MM-DD');
    return function(dispatch) {
        return ExternalAPI.getHistory(currency, startDate, finalDate)
            .then((result) =>
                dispatch(loadHistorySuccess(result)))
            .catch((error) => console.log(error));
    };
}
