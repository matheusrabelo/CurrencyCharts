import React from 'react';

import Chart from './chart/Chart';
import CurrencySelector from './currencySelector/CurrencySelector';

class Application extends React.Component {
    render() {
        return (
            <div
                style={style.wrapper}
                className="container">
                <CurrencySelector />
                <Chart />
            </div>
        );
    }
}

const style = {
    wrapper: {
        marginTop: '2em',
    },
};

export default Application;
