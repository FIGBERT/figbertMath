import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class SmallButton extends React.Component {
    render() {
        return (
            <button
                type='button'
                onClick={this.props.onClick}
                className={styles.button}
                value={this.props.value}
            >
                {this.props.value}
            </button>
        );
    }
}
SmallButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export class SmallButtonRow extends React.Component {
    render() {
        const onClick = this.props.onClick,
            onModeClick = this.props.onModeClick;
        return (
            <div className={styles.buttonRow}>
                {this.props.buttonValues.map(function (value, index, _) {
                    if (value === '…') {
                        return (
                            <button type='button' onClick={onModeClick} className={styles.button} value={'select'}>
                                {value}
                            </button>
                        );
                    } else {
                        return <SmallButton idx={index} value={value} onClick={onClick}/>;
                    }
                })}
            </div>
        );
    }
}
SmallButtonRow.propTypes = {
    buttonValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func,
    onModeClick: PropTypes.func
};