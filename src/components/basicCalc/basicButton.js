import React from 'react';
import PropTypes from 'prop-types';

class BasicButton extends React.Component {
    render() {
        return (
            <button type='button' onClick={this.props.onButtonPress} className='calc calc__squareButton' value={this.props.displayName}>
                {this.props.displayName}
            </button>
        );
    }
}
BasicButton.propTypes = {
    displayName: PropTypes.string.isRequired
};

export class BasicButtonRow extends React.Component {
    render() {
        let onButtonPress = this.props.onButtonPress;
        let onModeChange = this.props.onModeChange;
        return (
            <div className='calc calc__row'>
                {this.props.buttonValues.map(function (value, index, _) {
                    if (value === '…') {
                        return (
                            <button type='button' onClick={onModeChange} className='calc calc__squareButton' value={'select'}>
                                {value}
                            </button>
                        );
                    } else {
                        return <BasicButton idx={index} displayName={value} onButtonPress={onButtonPress}/>;
                    }
                })}
            </div>
        );
    }
}
BasicButtonRow.propTypes = {
    buttonValues: PropTypes.arrayOf(PropTypes.string).isRequired
};