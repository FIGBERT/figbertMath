import React from 'react';
import PropTypes from 'prop-types';
import { AngSizeButton } from "./angSizeButton";
import { ModeButton } from "../modeSelect/modeButton";

export class AngSizePad extends React.Component {
    render() {
        return (
            <div className='calc calc__pad' style={{alignItems: 'center'}}>
                <AngSizeButton
                    buttonValue='⍺'
                    textValue={this.props.aVal}
                    truth={this.props.aTruth}
                    onChange={this.props.onChange}
                    onClick={this.props.onClick}
                />
                <AngSizeButton
                    buttonValue='r'
                    textValue={this.props.rVal}
                    truth={this.props.rTruth}
                    onChange={this.props.onChange}
                    onClick={this.props.onClick}
                />
                <AngSizeButton
                    buttonValue='d'
                    textValue={this.props.dVal}
                    truth={this.props.dTruth}
                    onChange={this.props.onChange}
                    onClick={this.props.onClick}
                />
                <ModeButton value='select' modeName='…' onButtonPress={this.props.onModeChange} />
            </div>
        );
    }
}
AngSizePad.propTypes = {
    aVal: PropTypes.string.isRequired,
    aTruth: PropTypes.bool.isRequired,
    rVal: PropTypes.string.isRequired,
    rTruth: PropTypes.bool.isRequired,
    dVal: PropTypes.string.isRequired,
    dTruth: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};