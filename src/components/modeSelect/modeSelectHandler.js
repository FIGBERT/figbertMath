import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../calcOut";
import { ModePad } from "./modePad";

export class ModeSelect extends React.Component {
    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} />
                <ModePad onButtonPress={this.props.onButtonPress} />
            </div>
        );
    }
}
ModeSelect.propTypes = {
    mode: PropTypes.string.isRequired
};