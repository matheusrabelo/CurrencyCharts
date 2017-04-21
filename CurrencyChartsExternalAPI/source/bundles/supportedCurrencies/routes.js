import express from 'express';

import * as services from './services';

const supportedCurrencies = new express.Router();

supportedCurrencies.get('/', (request, response) => {
    return services.getSupportedCurrencies()
        .then((result) => {
            response.status(200)
                    .json({
                        currencies: result.currencies,
                        success: true,
                    });
        })
        .catch(() => {
            response.status(500)
                    .json({
                        message: 'something went wrong',
                        success: false,
                    });
        });
});

export default supportedCurrencies;
