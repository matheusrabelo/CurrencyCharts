import express from 'express';
import moment from 'moment';

import * as services from './services';

const history = new express.Router();

history.get('/', (request, response) => {
    let { currency, startDate, finalDate } = request.query;

    if (!currency) {
        return response.status(400)
            .json({
                message: 'currency should be given',
                success: false,
            });
    }

    // The range limit is 10 days
    const rangeLimitInMilliseconds = 10 * 24 * 60 * 60 * 1000;

    startDate = moment(startDate);
    finalDate = moment(finalDate);

    if (startDate.isAfter(finalDate) ||
        finalDate.diff(startDate) > rangeLimitInMilliseconds) {
       return response.status(400)
            .json({
                message: 'invalid start date, final date or range between them',
                success: false,
            });
    }

    return services.getHistory(currency, startDate, finalDate)
        .then((result) => {
            response.status(200)
                    .json({
                        startDate: result.startDate,
                        finalDate: result.finalDate,
                        source: result.source,
                        data: result.data,
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

export default history;
