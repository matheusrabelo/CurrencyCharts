import React from 'react';
import { connect } from 'react-redux';

import createChart from './createChart';

class Chart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            history: [[]],
        };
    }

    render() {
        createChart(this.props.history);
        return (
            <div id='chart'></div>
        );
    }
};

function mapStateToProps(state, ownProps) {
    return {
        history: state.history,
    };
}

export default connect(mapStateToProps)(Chart);
