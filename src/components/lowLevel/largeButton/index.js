import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export class LargeButton extends React.Component {
    render() {
        const canBeDisabled = this.props.mode === 'angSize',
            acceptsInput = this.props.mode !== 'select';
        if (this.props.value === 'select') {
            return (
                <button
                    type='button'
                    className={styles.columnButton}
                    value={this.props.value}
                    onClick={this.props.onModeClick}
                >
                    {this.props.displayValue}
                </button>
            );
        } else if (this.props.value === 'type') {
            return (
                <button
                    type='button'
                    className={styles.columnButton}
                    value={this.props.value}
                    onClick={this.props.onClick}
                >
                    {this.props.displayValue}
                </button>
            );
        } else if (this.props.value === 'range') {
            return (
                <div className={styles.rowButton}>
                    <button
                        type='button'
                        className={styles.transparentButton}
                        value='raise'
                        onClick={this.props.onClick}
                    >
                        +
                    </button>
                    {this.props.displayValue}
                    <button
                        type='button'
                        className={styles.transparentButton}
                        value='lower'
                        onClick={this.props.onClick}
                    >
                        -
                    </button>
                </div>
            );
        }
        if (canBeDisabled) {
            if (!this.props.disabledTruth) {
                return (
                    <button className={styles.disabled} value={this.props.value} onClick={this.props.onClick}>
                        {this.props.displayValue} =
                        <input
                            type='number'
                            name={this.props.displayValue}
                            value=''
                            onChange={this.props.onChange}
                            disabled
                        />
                    </button>
                );
            } else {
                return (
                    <button className={styles.columnButton} value={this.props.value} onClick={this.props.onClick}>
                        {this.props.displayValue} =
                        <input
                            type='number'
                            name={this.props.displayValue}
                            value={this.props.textValue}
                            onChange={this.props.onChange}
                        />
                    </button>
                );
            }
        } else if (acceptsInput) {
            return (
                <div className={styles.columnButton}>
                    {this.props.displayValue} =
                    <input
                        type='number'
                        name={this.props.displayValue}
                        value={this.props.textValue}
                        onChange={this.props.onChange}
                    />
                </div>
            );
        } else {
            return (
                <button
                    type='button'
                    className={styles.columnButton}
                    value={this.props.value}
                    onClick={this.props.onClick}
                >
                    {this.props.displayValue}
                </button>
            );
        }
    }
}

LargeButton.propTypes = {
    mode: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onModeClick: PropTypes.func,
    disabledTruth: PropTypes.bool,
    value: PropTypes.string,
    displayValue: PropTypes.string,
    textValue: PropTypes.string
};