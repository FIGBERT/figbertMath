import React from 'react';
import PropTypes from 'prop-types';

class BasicButton extends React.Component {
    render() {
        return (
            <button type='button' onClick={this.props.onButtonPress} className='calc calc__button' value={this.props.value}>
                <span style={{fontSize: '2vw'}}>{this.props.value}</span>
            </button>
        );
    }
}
BasicButton.propTypes = {
    value: PropTypes.string.isRequired
};

export class BasicButtonRow extends React.Component {
    render() {
        let onButtonPress = this.props.onButtonPress;
        return (
            <div className='calc calc__row'>
                {this.props.buttonValues.map(function (value, index, _) {
                    return <BasicButton idx={index} value={value} onButtonPress={onButtonPress} />;
                })}
            </div>
        );
    }
}
BasicButtonRow.propTypes = {
    buttonValues: PropTypes.arrayOf(PropTypes.string).isRequired
};