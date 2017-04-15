import 'jquery';
import 'babel-polyfill';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Application from './components/Application';

const store = configureStore();

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('application')
);
