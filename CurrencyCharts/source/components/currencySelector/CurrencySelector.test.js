import 'mocha';

import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import CurrencySelector from './CurrencySelector';

function setup() {
    const props = {
        changeCurrency: () => {},
        showCurrency: () => {},
        refreshCurrencyPicker: () => {},
        currencies: [],
        store: configureStore([thunk])(),
    };
    return shallow(<CurrencySelector {...props} />);
}

describe('CurrencySelector', () => {
    it('should build currency selector', () => {
        const wrapper = setup();
        expect(wrapper.find('#currencyPicker')).to.have.length(0);
        expect(wrapper.find('button')).to.have.length(0);
    });
});
