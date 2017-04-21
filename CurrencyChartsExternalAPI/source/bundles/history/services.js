import axios from 'axios';
import moment from 'moment';

import * as configuration from '../../configuration';

const axiosInstance = axios.create({
  baseURL: configuration.CURRENCY_LAYER_API_URL,
  params: {
    access_key: configuration.CURRENCY_LAYER_API_TOKEN,
  },
});

function getDayHistory(currency, date) {
  return axiosInstance.get('/historical', {
    params: {
      currencies: currency,
      date: date.format('YYYY-MM-DD'),
    },
  })
    .then((result) =>
      result.data.quotes[`USD${currency}`]
    )
    .catch((error) => {
      return error;
    });
}

function getRangeHistory(currency, startDate, finalDate) {
  const daysHistory = [];
  for (let date = moment(startDate);
       finalDate.diff(date) > 0;
       date.add(1, 'days')) {
    daysHistory.push(getDayHistory(currency, date));
  };
  return daysHistory;
}

export function getHistory(currency, requestStartDate, requestFinalDate) {
    const startDate = moment(requestStartDate);
    const finalDate = moment(requestFinalDate);
    const daysHistory = getRangeHistory(currency, startDate, finalDate);
    return Promise.all(daysHistory)
      .then((results) => {
        return results.map((result, index) => {
          const timestamp =
            moment(startDate).add(index, 'days').toDate().getTime();
          return [timestamp, result];
        });
      })
      .then((data) => ({
        source: currency,
        startDate: startDate.format('YYYY-MM-DD'),
        finalDate: finalDate.format('YYYY-MM-DD'),
        data,
      }));
};
