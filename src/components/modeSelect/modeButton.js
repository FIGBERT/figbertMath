import React from 'react';
import PropTypes from 'prop-types';

export class ModeButton extends React.Component {
    render() {
        return (
            <button
                type='button'
                className='calc calc__rectangleButton'
                value={this.props.value}
                onClick={this.props.onButtonPress}
            >
                {this.props.modeName}
            </button>
        );
    }
}
ModeButton.propTypes = {
    value: PropTypes.string.isRequired,
    modeName: PropTypes.string.isRequired
};