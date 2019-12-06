import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

const buttonValues = [
    ['AC', 'DEL', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '–'],
    ['1', '2', '3', '+'],
    ['…', '0', '.', '=']
];

export class SimpleCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 0,
            input: '',
            justSolved: false
        };
        this.addDigit = this.addDigit.bind(this);
        this.clear = this.clear.bind(this);
        this.delete = this.delete.bind(this);
        this.equate = this.equate.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
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

    clear() {
        this.setState({
            output: 0,
            input: ''
        });
    }

    delete() {
        this.setState({
            input: this.state.input.slice(0,-1)
        });
    }

    equate() {
        if (!this.state.justSolved) {
            let final;
            if (!isNaN(Number(this.state.input.slice(-1)))) {
                // eslint-disable-next-line
                final = eval(this.state.input);
                if (final == null || isNaN(final)) {
                    final = 'ERROR';
                }
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
                break;
            default:
                this.addDigit(value);
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
                <Pad
                    buttonValues={buttonValues}
                    onClick={this.onButtonPress}
                    onModeClick={this.props.onModeChange}
                    type={'small'}
                />
            </div>
        );
    }
}
SimpleCalc.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func
};
