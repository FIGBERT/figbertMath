import React from 'react';
import PropTypes from 'prop-types';

class CalcButton extends React.Component {
    render() {
        return (
            <button type='button' className='calc calc__button' value={this.props.value}>
                <span style={{fontSize: '2.5vw'}}>{this.props.value}</span>
            </button>
        );
    }
}
CalcButton.propTypes = {
    value: PropTypes.string.isRequired
};

export class CalcButtonRow extends React.Component {
    render() {
        return (
            <div className='calc calc__row'>
                {this.props.buttonValues.map(function (value, index, _) {
                    return <CalcButton idx={index} value={value} />;
                })}
            </div>
        );
    }
}
CalcButtonRow.propTypes = {
    buttonValues: PropTypes.arrayOf(PropTypes.string).isRequired
};