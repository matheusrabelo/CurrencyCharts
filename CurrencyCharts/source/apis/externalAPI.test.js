import 'mocha';

import nock from 'nock';
import { expect } from 'chai';

import ExternalAPI from './externalAPI';

import * as history from './mocks/history.json';
import * as supportedCurrencies from './mocks/supportedCurrencies.json';

nock('http://localhost:8088/v1')
            .get('/supportedCurrencies')
            .reply(200, supportedCurrencies);

nock('http://localhost:8088/v1')
            .get('/history')
            .query({
                currency: 'BRL',
                startDate: /\d\d\d\d-\d\d-\d\d/,
                finalDate: /\d\d\d\d-\d\d-\d\d/,
            })
            .reply(200, history);

describe('externalAPI', () => {
    let externalAPI;

    beforeEach(() => {
        externalAPI = new ExternalAPI();
    });

    it('should get current supported currencies', (done) => {
        externalAPI.getCurrentSupportedCurrencies()
            .then((result) => {
                expect(result).to.be.deep.equal(supportedCurrencies);
                done();
            })
            .catch((err) => done(new Error(err)));
    });

    it('should get history', (done) => {
        externalAPI.getHistory('BRL', '2008-08-09', '2008-09-16')
            .then((result) => {
                expect(result).to.be.deep.equal(history);
                done();
            })
            .catch((err) => done(new Error('catch:' + err)));
    });
});
