import 'mocha';

import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Chart from './Chart';

function setup() {
    const props = {
        changeCurrency: () => {},
        showCurrency: () => {},
        refreshCurrencyPicker: () => {},
        currencies: [],
        store: configureStore([thunk])(),
    };
    return shallow(<Chart {...props} />);
}

describe('Chart', () => {
    it('should build chart', () => {
        const wrapper = setup();
        expect(wrapper.find('#chart')).to.have.length(0);
    });
});
