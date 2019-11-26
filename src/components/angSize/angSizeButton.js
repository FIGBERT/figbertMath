import React from 'react';
import PropTypes from 'prop-types';

let buttonCSS = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
};

let disabledCSS = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: '#7e1221'
};

export class AngSizeButton extends React.Component {
    render() {
        if (this.props.truth) {
            return (
                <button
                    className='calc calc__rectangleButton'
                    style={buttonCSS}
                    value={this.props.buttonValue}
                    onClick={this.props.onClick}
                >
                    {this.props.buttonValue} =
                    <input
                        name={this.props.buttonValue}
                        type='number'
                        value={this.props.textValue}
                        onChange={this.props.onChange}
                    />
                </button>
            );
        } else {
            return (
                <button
                    className='calc calc__rectangleButton'
                    style={disabledCSS}
                    value={this.props.buttonValue}
                    onClick={this.props.onClick}
                >
                    {this.props.buttonValue} =
                    <input
                        name={this.props.buttonValue}
                        type='number'
                        value={this.props.textValue}
                        onChange={this.props.onChange}
                        disabled
                    />
                </button>
            );
        }
    }
}
AngSizeButton.propTypes = {
    buttonValue: PropTypes.string.isRequired,
    textValue: PropTypes.string.isRequired,
    truth: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};