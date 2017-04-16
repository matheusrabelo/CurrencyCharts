import 'mocha';

import { expect } from 'chai';

import * as constants from '../constants';
import currenciesReducer from './currenciesReducer';

describe('currenciesReducer', () => {
    it('should reduce currencies actions', () => {
        const state = ['state'];
        const action = {
            type: constants.LOAD_CURRENCIES_SUCCESS,
            currencies: [
                {
                    title: 'BRL',
                    name: 'Brazilian Real',
                },
            ],
        };
        const newState = currenciesReducer(state, action);
        expect(newState).to.be.equal(action.currencies);
    });
    it('should return old state for other actions', () => {
        const state = ['state'];
        const action = {
            type: constants.LOAD_HISTORY_SUCCESS,
            history: [],
        };
        const newState = currenciesReducer(state, action);
        expect(newState).to.be.deep.equal(state);
    });
});
