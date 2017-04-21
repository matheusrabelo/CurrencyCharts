import 'mocha';

import { expect } from 'chai';
import nock from 'nock';

import * as configuration from '../../configuration';
import * as services from './services';

nock(configuration.CURRENCY_LAYER_API_URL)
    .get('/historical')
    .query({
        access_key: configuration.CURRENCY_LAYER_API_TOKEN,
    })
    .reply(200, {
        success: true,
        terms: 'https:\/\/currencylayer.com\/terms',
        privacy: 'https:\/\/currencylayer.com\/privacy',
        historical: true,
        date: '2004-04-21',
        timestamp: 1082591999,
        source: 'USD',
        quotes: {
            'USDBRL': 4,
        },
    });

describe('history', () => {
    it('should get range history', (done) => {
        services.getHistory('BRL', '2017-04-19', '2017-04-21')
            .then((result) => {
                expect(result.source).to.be.equal('BRL');
                expect(result.startDate).to.be.equal('2017-04-19');
                expect(result.finalDate).to.be.equal('2017-04-21');
                expect(result.data).to.have.length(2);
                done();
            })
            .catch((error) => done(new Error(error)));
    });
});
