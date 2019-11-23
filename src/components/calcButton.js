import React from 'react';
import PropTypes from 'prop-types';

class CalcButton extends React.Component {
    buttonFlex = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '3vw'
    };

    render() {
        return (
            <div style={this.buttonFlex} className='calc calc__button'>
                {this.props.value}
            </div>
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