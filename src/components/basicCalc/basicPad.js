import React from "react";
import { BasicButtonRow } from "./basicButton";

export class BasicPad extends React.Component {
    render() {
        return (
            <div className='calc calc__pad'>
                <BasicButtonRow onButtonPress={this.props.onButtonPress} buttonValues={['AC', 'DEL', '%', '÷']} />
                <BasicButtonRow onButtonPress={this.props.onButtonPress} buttonValues={['7', '8', '9', '×']} />
                <BasicButtonRow onButtonPress={this.props.onButtonPress} buttonValues={['4', '5', '6', '–']} />
                <BasicButtonRow onButtonPress={this.props.onButtonPress} buttonValues={['1', '2', '3', '+']} />
                <BasicButtonRow onButtonPress={this.props.onButtonPress} buttonValues={['…', '0', '.', '=']} />
            </div>
        );
    }
}