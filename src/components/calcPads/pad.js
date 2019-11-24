import React from 'react';
import PropTypes from 'prop-types';
import { BasicPad } from "./basicPad";

export class Pad extends React.Component {
    render() {
        let pad;
        if (this.props.mode === 'basic') {
            pad = <BasicPad />
        } else {
            pad = <BasicPad />
            /*
            TO DO:
            Implement other pads for calculator
             */
        }
        return pad;
    }
}
Pad.propTypes = {
    mode: PropTypes.string.isRequired
};