import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as currencyActions from '../../actions/currencyActions';

class CurrencySelector extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currency: 'AED',
            currencies: [],
        };

        // Changing reference for 'this' in methods
        this.showCurrency = this.showCurrency.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeCurrency(event) {
        const currency = event.target.value;
        this.setState({ currency });
    }

    showCurrency() {
        this.props.actions.loadHistory(this.state.currency);
    }

    refreshCurrencyPicker() {
        // refresh selectPicker
        setTimeout(function() {
            $('#currencyPicker').selectpicker('refresh');
        }, 0);
    }

    render() {
        this.refreshCurrencyPicker();
        return (
            <div>
                <select
                    onChange={this.changeCurrency}
                    id="currencyPicker"
                    className="selectpicker">
                     {this.props.currencies.map((currency) =>
                        <option
                            key={currency.title.toString()}
                            value={currency.title}>
                            {currency.title} - {currency.name}
                        </option>
                     )}
                </select>
                <button
                    style={style.showCurrency}
                    onClick={this.showCurrency}
                    className="btn btn-primary">
                    Show exchange rate
                </button>
            </div>
        );
    }
}

const style = {
    showCurrency: {
        marginLeft: '0.5em',
    },
};

CurrencySelector.propTypes = {
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        currencies: state.currencies,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(currencyActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
