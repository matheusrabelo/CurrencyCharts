import * as types from './currencyTypes';

// redux action creator
export function showCurrency(currency) {
    return { type: types.viewCurrency, currency };
}
