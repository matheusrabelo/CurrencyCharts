/*
For a while, integration with external API will be mocked

import axios from 'axios';
import configuration from './configuration';
*/

import * as supportedCurrencies from './mocks/supportedCurrencies.json';
import * as exchangeRate from './mocks/exchangeRate.json';
import * as historical from './mocks/historical.json';

function delay(value) {
    return new Promise((resolve) => {
        setTimeOut(
            resolve(value)
        , 1000);
    });
}

class ExternalAPI {
    getCurrentSupportedCurrencies() {
        return delay(supportedCurrencies);
    }
    getExchangeRate() {
        return delay(exchangeRate);
    }
    getHistorical(startDate, finalDate) {
        return delay(historical);
    }
};

export default ExternalAPI;
