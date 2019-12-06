import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

export class ConsecNumCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '',
            amount: '',
            sum: '',
            type: 'Mixed'
        };
        this.onChange = this.onChange.bind(this);
        this.onTypeClick = this.onTypeClick.bind(this);
    }

    onChange(object) {
        const value = object.target.value,
            name = object.target.name;
        if (name === 'Amount') {
            this.setState({ amount: value }, () => {
                if (this.state.amount !== '' && this.state.sum !== '') {
                    this.solveConsec()
                }
            });
        } else if (name === 'Sum') {
            this.setState({ sum: value }, () => {
                if (this.state.amount !== '' && this.state.sum !== '') {
                    this.solveConsec()
                }
            });
        }
    }

    onTypeClick() {
        if (this.state.type === 'Mixed') {
            this.setState({ type: 'Even' }, () => {
                if (this.state.amount !== '' && this.state.sum !== '') {
                    this.solveConsec()
                }
            });
        } else if (this.state.type === 'Even') {
            this.setState({ type: 'Odd' }, () => {
                if (this.state.amount !== '' && this.state.sum !== '') {
                    this.solveConsec()
                }
            });
        } else {
            this.setState({ type: 'Mixed' }, () => {
                if (this.state.amount !== '' && this.state.sum !== '') {
                    this.solveConsec()
                }
            });
        }
    }

    solveConsec() {
        const amount = Number(this.state.amount),
            sum = Number(this.state.sum),
            type = this.state.type,
            getSum = (total, num) => {
                return total + num;
            };
        let smallestNum,
            step,
            addend = 0,
            numAmount = parseInt(amount, 10),
            numSum = parseInt(sum, 10),
            allNums = [];
        if (type === 'Odd') {
            smallestNum = numSum > 0 ? 1 : -1;
            step = numSum > 0 ? 2 : -2;
        } else if (type === 'Even') {
            smallestNum = 0;
            step = numSum > 0 ? 2 : -2;
        } else if (type === 'Mixed') {
            smallestNum = 0;
            step = numSum > 0 ? 1 : -1;
        }
        for (let a = 0; a < numAmount; a++) {
            allNums.push(smallestNum + addend);
            addend += step;
        }
        if (numSum > 0) {
            while (
                allNums.reduce(getSum) !== numSum &&
                allNums.reduce(getSum) < numSum
                ) {
                for (let a = 0; a < allNums.length; a++) {
                    allNums[a] += step;
                }
            }
        } else if (numSum < 0) {
            while (
                allNums.reduce(getSum) !== numSum &&
                allNums.reduce(getSum) > numSum
                ) {
                for (let a = 0; a < allNums.length; a++) {
                    allNums[a] += step;
                }
            }
        }
        if (allNums.reduce(getSum) > numSum || allNums.reduce(getSum) < numSum) {
            this.setState({
                output: 'ERROR'
            })
        } else {
            this.setState({
                output: allNums.toString()
            })
        }
    }

    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
                <Pad
                    buttonValues={['amount', 'sum', 'type', 'select']}
                    displayValues={['Amount', 'Sum', this.state.type, '…']}
                    mode={this.props.mode}
                    onChange={this.onChange}
                    onClick={this.onTypeClick}
                    onModeClick={this.props.onModeChange}
                    textValues={[this.state.amount, this.state.sum]}
                    type={'large'}
                />
            </div>
        );
    }
}
ConsecNumCalc.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func.isRequired
};
