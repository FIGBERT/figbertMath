import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

export class CalcButton extends React.Component {
    render() {
        return (
            <div className='calc calc__button'>
                {this.props.value}
            </div>
        );
    }
}

CalcButton.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};
