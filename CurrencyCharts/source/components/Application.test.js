import 'mocha';

import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Application from './Application';

function setup() {
    const props = {
        changeCurrency: () => {},
        showCurrency: () => {},
        refreshCurrencyPicker: () => {},
        currencies: [],
        store: configureStore([thunk])(),
    };
    return shallow(<Application {...props} />);
}

describe('Application', () => {
    it('should build application', () => {
        const wrapper = setup();
        expect(wrapper.find('.container')).to.have.length(1);
    });
});
