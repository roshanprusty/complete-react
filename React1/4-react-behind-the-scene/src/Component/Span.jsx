import React from 'react';
import PropTypes from 'prop-types';
function Span(props) {
    console.log("span executed");
    return <span>{props.count}</span>
    
}
Span.propTypes = {
    count: PropTypes.number.isRequired
};
export default React.memo(Span);