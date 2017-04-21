import 'mocha';

import { expect } from 'chai';
import nock from 'nock';

import * as configuration from '../../configuration';
import * as services from './services';

nock(configuration.CURRENCY_LAYER_API_URL)
    .get('/list')
    .query({
        access_key: configuration.CURRENCY_LAYER_API_TOKEN,
    })
    .reply(200, {
        success: true,
        terms: 'https:\/\/currencylayer.com\/terms',
        privacy: 'https:\/\/currencylayer.com\/privacy',
        currencies: {
            ALL: 'Albanian Lek',
            BOB: 'Bolivian Boliviano',
            BRL: 'Brazilian Real',
        },
    });

describe('supportedCurrencies', () => {
    it('should get supported currency list', (done) => {
        services.getSupportedCurrencies()
            .then((result) => {
                expect(result.currencies).to.have.property('ALL');
                expect(result.currencies).to.have.property('BOB');
                expect(result.currencies).to.have.property('BRL');
                done();
            })
            .catch((error) => done(new Error(error)));
    });
});
