import axios from 'axios';
import toastr from 'toastr';

import { EXTERNAL_API } from '../constants';

class ExternalAPI {
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: EXTERNAL_API,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        });
    }

    getCurrentSupportedCurrencies() {
        return this.axiosInstance.get('/supportedCurrencies')
            .then((result) => result.data)
            .catch((error) => {
                toastr.error(
                    'Something went wrong while getting ' +
                    'supported currencies list');
                return error;
            });
    }

    getHistory(currency, startDate, finalDate) {
        return this.axiosInstance.get('/history', {
            params: {
                currency, startDate, finalDate,
            },
        })
            .then((result) => result.data)
            .catch((error) => {
                toastr.error(
                    'Something went wrong while getting ' +
                    'currency history');
                return error;
            });
    }
}

export default ExternalAPI;
