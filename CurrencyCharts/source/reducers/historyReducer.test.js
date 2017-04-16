import 'mocha';

import { expect } from 'chai';

import * as constants from '../constants';
import historyReducer from './historyReducer';

describe('historyReducer', () => {
    it('should reduce history actions', () => {
        const state = ['state'];
        const action = {
            type: constants.LOAD_HISTORY_SUCCESS,
            history: ['history'],
        };
        const newState = historyReducer(state, action);
        expect(newState).to.be.deep.equal(action.history);
    });
    it('should return old state for other actions', () => {
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
        const newState = historyReducer(state, action);
        expect(newState).to.be.equal(state);
    });
});
