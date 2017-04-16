import 'mocha';

import { expect } from 'chai';

import * as constants from '../constants';
import * as currencyActions from './currencyActions';

describe('currencyActions', () => {
    describe('loadCurrenciesSuccess', () => {
        it('should return action type and value of new state', () => {
            const currencies = [
                {
                    title: 'BRL',
                    name: 'Brazilian Real',
                },
                {
                    title: 'EUR',
                    name: 'Euro',
                },
            ];
            const action = currencyActions.loadCurrenciesSuccess(currencies);
            expect(action.type).to.be.equal(constants.LOAD_CURRENCIES_SUCCESS);
            expect(action.currencies).to.be.equal(currencies);
        });
    });

    describe('loadHistorySuccess', () => {
        it('should return action type and value of new state', () => {
            const history = {};
            const action = currencyActions.loadHistorySuccess(history);
            expect(action.type).to.be.equal(constants.LOAD_HISTORY_SUCCESS);
            expect(action.history).to.be.equal(history);
        });
    });
});
