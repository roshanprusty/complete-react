import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

class HoverCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(previousState => {
            return { count: previousState.count + 1 };
        });
    }

    render() {
        const { count } = this.state;
        return <button onMouseOver={this.incrementCount}>{this.props.name} Hovered {count} times</button>;
    }
}

export default UpdatedComponent(HoverCounter);
