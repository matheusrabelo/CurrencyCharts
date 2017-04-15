import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as currencyActions from '../../actions/currencyActions';

class CurrencySelector extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currency: {
                title: 'BRL',
            },
        };

        // Changing reference for 'this' in methods
        this.viewCurrency = this.viewCurrency.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeCurrency(event) {
        const { currency } = this.state;
        currency.title = event.target.value;
        this.setState({ currency });
    }

    viewCurrency() {
        this.props.showCurrency(this.state.currency);
    }

    render() {
        return (
            <div>
                <select
                    onChange={this.changeCurrency}
                    className="selectpicker">
                    <option> BRL </option>
                    <option> USD </option>
                    <option> EUR </option>
                </select>
                <button
                    style={style.viewCurrency}
                    onClick={this.viewCurrency}
                    className="btn btn-primary">
                    View Currency
                </button>
            </div>
        );
    }
}

const style = {
    viewCurrency: {
        marginLeft: '0.5em',
    },
};

CurrencySelector.propTypes = {
    showCurrency: PropTypes.func.isRequired,
    currency: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        currency: state.currency,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showCurrency: (currency) =>
            dispatch(currencyActions.showCurrency(currency)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
