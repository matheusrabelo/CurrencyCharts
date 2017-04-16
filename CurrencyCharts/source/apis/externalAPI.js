/*
For a while, integration with external API will be mocked

import axios from 'axios';
import { EXTERNAL_API } from '../constants';
*/

import * as supportedCurrencies from './mocks/supportedCurrencies.json';
import * as history from './mocks/history.json';

function delay(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 300);
    });
}

class ExternalAPI {
    static getCurrentSupportedCurrencies() {
        return delay(supportedCurrencies);
    }

    static getHistory(currency, startDate, finalDate) {
        // keeping imuttable objects
        const currencyHistory =
            Object.assign({}, history, { source: currency });
        return delay(currencyHistory);
    }
}

export default ExternalAPI;
