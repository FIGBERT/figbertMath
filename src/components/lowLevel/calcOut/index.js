import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export class CalcOut extends React.Component {
    render() {
        if (this.props.mode === 'basic') {
            return (
                <div className={styles.basicOut}>
                    <div className={styles.h1}>{this.props.output}</div>
                    <div className={styles.h3}>{this.props.input}</div>
                </div>
            );
        } else if (this.props.mode === 'select') {
            return (
                <div className={styles.selectOut}>
                    <span className={styles.h2}>Mode Select</span>
                </div>
            );
        } else {
            return (
                <div className={styles.out}>
                    <span className={styles.h2}>{this.props.output}</span>
                </div>
            );
        }
    }
}

CalcOut.propTypes = {
    mode: PropTypes.string.isRequired,
    output: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    input: PropTypes.string
};