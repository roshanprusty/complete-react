import React, { Component } from 'react';
import WithCounter from './WithCounter';
import PropTypes from 'prop-types'; // Import PropTypes


class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <button onMouseOver={incrementCount}> Hover {count} times</button>
        )
    }
}
HoverCounter.propTypes = {
    count: PropTypes.number.isRequired, // Validate the 'count' prop
    incrementCount: PropTypes.func.isRequired // Validate the 'incrementCount' prop
};

const withCounter = WithCounter(HoverCounter, 10);
export default withCounter;
