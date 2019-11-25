import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../calcOut";
import { BasicPad } from "./basicPad";

export class BasicCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 0,
            input: '',
            justSolved: false
        };
        this.onButtonPress = this.onButtonPress.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.equate = this.equate.bind(this);
        this.delete = this.delete.bind(this);
        this.clear = this.clear.bind(this);
    }

    onButtonPress(object) {
        let value = object.target.value;
        switch (value) {
            case 'AC':
                this.clear();
                break;
            case 'DEL':
                this.delete();
                break;
            case '=':
                this.equate();
                break;
            case undefined:
                console.log("FUCK");
                break;
            default:
                this.addDigit(value);
        }
    }

    addDigit(buttonVal) {
        if (this.state.justSolved) {
            this.setState({
                output: 0,
                input: '',
                justSolved: false
            });
        }
        let value;
        switch (buttonVal) {
            case '÷':
                value = '/';
                break;
            case '–':
                value = '-';
                break;
            case '×':
                value = '*';
                break;
            default:
                value = buttonVal;
        }
        const newInput = this.state.input + value;
        this.setState({
            input: newInput
        });
    }

    delete() {
        this.setState({
            input: this.state.input.slice(0,-1)
        });
    }

    clear() {
        this.setState({
            output: 0,
            input: ''
        });
    }

    equate() {
        if (!this.state.justSolved) {
            let final;
            if (!isNaN(Number(this.state.input.slice(-1)))) {
                // eslint-disable-next-line
                final = eval(this.state.input);
            } else {
                final = 'ERROR';
            }
            this.setState({
                output: final,
                input: '',
                justSolved: true
            });
        }
    }

    render() {
        return (
            <div>
                <CalcOut
                    mode={this.props.mode}
                    output={this.state.output}
                    input={this.state.input}
                />
                <BasicPad onButtonPress={this.onButtonPress} onModeChange={this.props.onModeChange}/>
            </div>
        );
    }
}
BasicCalc.propTypes = {
    mode: PropTypes.string.isRequired
};