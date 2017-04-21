import 'jquery';
import 'babel-polyfill';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import 'highcharts/highcharts.js';
import 'toastr/build/toastr.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Application from './components/Application';
import { loadCurrencies } from './actions/currencyActions';

const store = configureStore();
store.dispatch(loadCurrencies());

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('application')
);
