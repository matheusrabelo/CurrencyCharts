import axios from 'axios';

import * as configuration from '../../configuration';

const axiosInstance = axios.create({
  baseURL: configuration.CURRENCY_LAYER_API_URL,
  params: {
    access_key: configuration.CURRENCY_LAYER_API_TOKEN,
  },
});

export function getSupportedCurrencies() {
    return axiosInstance.get('/list')
        .then((result) => ({
                currencies: result.data.currencies,
        }));
}
