import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export class LargeButton extends React.Component {
    render() {
        const equationForm = this.props.mode === 'simultaneousEQ',
            canBeDisabled = this.props.mode === 'angSize',
            acceptsInput = this.props.mode !== 'select';
        if (this.props.value === 'select') {
            return (
                <button
                    type='button'
                    className={styles.button}
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
                    className={styles.button}
                    value={this.props.value}
                    onClick={this.props.onClick}
                >
                    {this.props.displayValue}
                </button>
            );
        }
        if (equationForm) {
            if (this.props.displayValue === '2') {
                return (
                    <div className={styles.EQButton}>
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[0]}
                                value={this.props.textValue[0]}
                                onChange={this.props.onChange}
                            />
                            x
                        </span> +
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[1]}
                                value={this.props.textValue[1]}
                                onChange={this.props.onChange}
                            />
                            y
                        </span> =
                        <input
                            type='number'
                            name={this.props.value[2]}
                            value={this.props.textValue[2]}
                            onChange={this.props.onChange}
                        />
                    </div>
                );
            } else if (this.props.displayValue === '3') {
                return (
                    <div className={styles.EQButton}>
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[0]}
                                value={this.props.textValue[0]}
                                onChange={this.props.onChange}
                            />
                            x
                        </span> +
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[1]}
                                value={this.props.textValue[1]}
                                onChange={this.props.onChange}
                            />
                            y
                        </span> +
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[2]}
                                value={this.props.textValue[2]}
                                onChange={this.props.onChange}
                            />
                            z
                        </span> =
                        <input
                            type='number'
                            name={this.props.value[3]}
                            value={this.props.textValue[3]}
                            onChange={this.props.onChange}
                        />
                    </div>
                );
            } else if (this.props.displayValue === '4') {
                return (
                    <div className={styles.EQButton}>
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[0]}
                                value={this.props.textValue[0]}
                                onChange={this.props.onChange}
                            />
                            w
                        </span> +
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[1]}
                                value={this.props.textValue[1]}
                                onChange={this.props.onChange}
                            />
                            x
                        </span> +
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[2]}
                                value={this.props.textValue[2]}
                                onChange={this.props.onChange}
                            />
                            y
                        </span> +
                        <span className={styles.closeText}>
                            <input
                                type='number'
                                name={this.props.value[3]}
                                value={this.props.textValue[3]}
                                onChange={this.props.onChange}
                            />
                            z
                        </span> =
                        <input
                            type='number'
                            name={this.props.value[4]}
                            value={this.props.textValue[4]}
                            onChange={this.props.onChange}
                        />
                    </div>
                );
            }
        } else if (canBeDisabled) {
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
                    <button className={styles.button} value={this.props.value} onClick={this.props.onClick}>
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
                <div className={styles.button}>
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
                    className={styles.button}
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