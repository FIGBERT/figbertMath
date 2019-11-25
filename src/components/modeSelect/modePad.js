import React from 'react';
import { ModeButton } from "./modeButton";

export class ModePad extends React.Component {
    render() {
        return (
            <div className='calc calc__pad' style={{alignItems: 'center'}}>
                <ModeButton modeName='Simple Calculator' value='basic' onButtonPress={this.props.onButtonPress} />
                <ModeButton modeName='Angular/Real Size' value='angSize' onButtonPress={this.props.onButtonPress} />
                <ModeButton modeName='Consecutive Number' value='consecNum' onButtonPress={this.props.onButtonPress} />
                <ModeButton modeName='Simultaneous Equations' value='simultaneousEQ' onButtonPress={this.props.onButtonPress} />
                <ModeButton modeName='Polygon Angles' value='PolyAng' onButtonPress={this.props.onButtonPress} />
            </div>
        );
    }
}