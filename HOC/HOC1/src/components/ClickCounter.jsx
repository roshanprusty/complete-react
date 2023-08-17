import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import WithCounter from './WithCounter';

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

ClickCounter.propTypes = {
    count: PropTypes.number.isRequired, // Validate the 'count' prop
    incrementCount: PropTypes.func.isRequired // Validate the 'incrementCount' prop
};

const withCounter = WithCounter(ClickCounter, 5);
export default withCounter;
