import React from 'react';
import PropTypes from 'prop-types';
import {SmallButtonRow} from "../smallButton";
import {LargeButton} from "../largeButton";
import styles from './styles.module.css';

export class Pad extends React.Component {
    render() {
        const mode = this.props.mode,
            onClick = this.props.onClick,
            onChange = this.props.onChange,
            onModeClick = this.props.onModeClick,
            disabledTruths = this.props.disabledTruths,
            displayValues = this.props.displayValues,
            textValues = this.props.textValues;
        let rows;
        if (this.props.type === 'small') {
            rows = this.props.buttonValues.map(function (array, index, _) {
                return <SmallButtonRow
                    idx={index}
                    buttonValues={array}
                    onClick={onClick}
                    onModeClick={onModeClick}
                />;
            });
        } else {
            rows = this.props.buttonValues.map(function (value, index, _) {
                return (
                    <LargeButton
                        mode={mode}
                        onClick={onClick}
                        onChange={onChange}
                        onModeClick={onModeClick}
                        value={value}
                        disabledTruth={disabledTruths == null ? false : disabledTruths[index]}
                        displayValue={displayValues == null ? '' : displayValues[index]}
                        textValue={textValues == null ? '' : textValues[index]}
                    />
                );
            });
        }
        return (
            <div className={styles.pad} style={this.props.style}>
                {rows}
            </div>
        );
    }
}
Pad.propTypes = {
    type: PropTypes.string.isRequired,
    buttonValues: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    mode: PropTypes.string,
    onChange: PropTypes.func,
    onModeClick: PropTypes.func,
    disabledTruths: PropTypes.arrayOf(PropTypes.bool),
    displayValues: PropTypes.array,
    textValues: PropTypes.arrayOf(PropTypes.string)
};