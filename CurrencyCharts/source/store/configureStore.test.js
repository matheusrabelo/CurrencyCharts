import 'mocha';

import { expect } from 'chai';

import configureStore from './configureStore';
import * as currencyActions from '../actions/currencyActions';

describe('store', () => {
    let store;

    beforeEach(() => {
        store = configureStore();
    });

    it('should handle currencies actions ', () => {
        const currencies = [{
            title: 'BRL',
            name: 'Brazilian Real',
        }];
        const action = currencyActions.loadCurrenciesSuccess(currencies);
        store.dispatch(action);
        const actualCurrencies = store.getState().currencies;
        expect(actualCurrencies).to.be.deep.equal(currencies);
    });

    it('should handle history actions ', () => {
        const history = ['history'];
        const action = currencyActions.loadHistorySuccess(history);
        store.dispatch(action);
        const actualHistory = store.getState().history;
        expect(actualHistory).to.be.deep.equal(history);
    });
});
