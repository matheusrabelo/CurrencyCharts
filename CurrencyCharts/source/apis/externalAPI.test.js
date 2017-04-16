import 'mocha';

import { expect } from 'chai';

import ExternalAPI from './externalAPI';

import * as history from './mocks/history.json';
import * as supportedCurrencies from './mocks/supportedCurrencies.json';

describe('externalAPI', () => {
    it('should get current supported currencies', (done) => {
        ExternalAPI.getCurrentSupportedCurrencies()
            .then((result) => {
                expect(result).to.be.deep.equal(supportedCurrencies);
                done();
            })
            .catch((err) => done(new Error(err)));
    });

    it('should get history', (done) => {
        ExternalAPI.getHistory('BRL', '2008-08-09', '2008-09-16')
            .then((result) => {
                expect(result).to.be.deep.equal(history);
                done();
            })
            .catch((err) => done(new Error(err)));
    });
});
