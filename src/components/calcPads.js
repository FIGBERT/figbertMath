import React from "react";
import { CalcButtonRow } from "./calcButton";

export class BasicPad extends React.Component {
    render() {
        return (
            <div className='calc calc__pad'>
                <CalcButtonRow buttonValues={['AC', '±', '%', '÷']} />
                <CalcButtonRow buttonValues={['4', '5', '6', '–']} />
                <CalcButtonRow buttonValues={['1', '2', '3', '+']} />
                <CalcButtonRow buttonValues={['0', '.', '=']} />
            </div>
        );
    }
}