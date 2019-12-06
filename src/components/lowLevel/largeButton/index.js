import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export class LargeButton extends React.Component {
    render() {
        const acceptsInput = this.props.mode !== 'select',
            equationFormat = this.props.mode === 'simultaneousEQ',
            canBeDisabled = this.props.mode === 'angSize';
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
        } else if (equationFormat) {
            const alphabet = (function(charA, charZ) {
                let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
                for (; i <= j; ++i) {
                    a.push(String.fromCharCode(i));
                }
                return a;
            }('a', 'z'));
            let coefficients = this.props.value[0],
                sums = this.props.value[1],
                buttons = [];
            for (let i = 0; i < coefficients.length; i++) {
                let eq = [];
                for (let k = 0; k < coefficients[i].length; k++) {
                    const name = 'c' + i + '_' + k;
                    eq.push(
                        <div>
                            <input
                                type='number'
                                className={styles.smallInput}
                                name={name}
                                value={coefficients[i][k]}
                                onChange={this.props.onChange}
                            />
                            {alphabet[k]}
                        </div>
                    );
                    if (k + 1 !== coefficients[i].length) { eq.push('+') }
                }
                eq.push(
                    '=',
                    <input
                        type='number'
                        className={styles.smallInput}
                        name={'s' + i}
                        value={sums[i]}
                        onChange={this.props.onChange}
                    />
                );
                buttons.push(
                    <div className={styles.rowButton}>
                        {eq}
                    </div>
                )
            }
            return (
                <div>
                    {buttons}
                </div>
            );
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
    disabledTruth: PropTypes.bool,
    displayValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    mode: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onModeClick: PropTypes.func,
    textValue: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
};
