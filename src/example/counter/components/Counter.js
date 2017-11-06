"use strict";

import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, onIncrement} = this.props;

        return (
            <p>
                {value}

                {' '}

                <button onClick={onIncrement}>
                    +
                </button>

            </p>
        )


    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
};

export default Counter;