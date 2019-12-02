import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

export class SimultaneousEquation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '',
            type: 'Two Variables',
            amount: '2',
            wOne: '',
            xOne: '',
            yOne: '',
            zOne: '',
            answerOne: '',
            wTwo: '',
            xTwo: '',
            yTwo: '',
            zTwo: '',
            answerTwo: '',
            wThree: '',
            xThree: '',
            yThree: '',
            zThree: '',
            answerThree: '',
            wFour: '',
            xFour: '',
            yFour: '',
            zFour: '',
            answerFour: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.shouldCalculate = this.shouldCalculate.bind(this);
    }

    onClick() {
        switch(this.state.type) {
            case "Two Variables":
                this.setState({
                    type: 'Three Variables',
                    amount: '3'
                });
                break;
            case "Three Variables":
                this.setState({
                    type: 'Four Variables',
                    amount: '4'
                });
                break;
            default:
                this.setState({
                    type: 'Two Variables',
                    amount: '2'
                });
                break;
        }
    }

    onChange(object) {
        const value = object.target.value,
            name = object.target.name;
        switch (name) {
            case 'wOne':
                this.setState({ wOne: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'xOne':
                this.setState({ xOne: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'yOne':
                this.setState({ yOne: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'zOne':
                this.setState({ zOne: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'answerOne':
                this.setState({ answerOne: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'wTwo':
                this.setState({ wTwo: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'xTwo':
                this.setState({ xTwo: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'yTwo':
                this.setState({ yTwo: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'zTwo':
                this.setState({ zTwo: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'answerTwo':
                this.setState({ answerTwo: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'wThree':
                this.setState({ wThree: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'xThree':
                this.setState({ xThree: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'yThree':
                this.setState({ yThree: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'zThree':
                this.setState({ zThree: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'answerThree':
                this.setState({ answerThree: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'wFour':
                this.setState({ wFour: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'xFour':
                this.setState({ xFour: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'yFour':
                this.setState({ yFour: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'zFour':
                this.setState({ zFour: value }, () => {
                    this.shouldCalculate()
                });
                break;
            case 'answerFour':
                this.setState({ answerFour: value }, () => {
                    this.shouldCalculate()
                });
                break;
            default:
                this.setState({
                    output: 'ERROR'
                });
        }
    }

    shouldCalculate() {
        let calc;
        switch (this.state.amount) {
            case '2':
                calc =
                    (this.state.xOne !== '' && this.state.yOne !== '' && this.state.answerOne !== '')
                    &&
                    (this.state.xTwo !== '' && this.state.yTwo !== '' && this.state.answerTwo !== '');
                break;
            case '3':
                calc =
                    (this.state.xOne !== '' && this.state.yOne !== '' && this.state.zOne !== '' && this.state.answerOne !== '')
                    &&
                    (this.state.xTwo !== '' && this.state.yTwo !== '' && this.state.zTwo !== '' && this.state.answerTwo !== '')
                    &&
                    (this.state.xThree !== '' && this.state.yThree !== '' && this.state.zThree !== '' && this.state.answerThree !== '');
                break;
            case '4':
                calc =
                    (this.state.wOne !== '' && this.state.xOne !== '' && this.state.yOne !== '' && this.state.zOne !== '' && this.state.answerOne !== '')
                    &&
                    (this.state.wTwo !== '' && this.state.xTwo !== '' && this.state.yTwo !== '' && this.state.zTwo !== '' && this.state.answerTwo !== '')
                    &&
                    (this.state.wThree !== '' && this.state.xThree !== '' && this.state.yThree !== '' && this.state.zThree !== '' && this.state.answerThree !== '')
                    &&
                    (this.state.wFour !== '' && this.state.xFour !== '' && this.state.yFour !== '' && this.state.zFour !== '' && this.state.answerFour !== '');
                break;
            default:
                this.setState({
                    output: 'ERROR'
                });
        }
        if (calc) {
            this.calc()
        }
    }

    calc() {
        const lcm = (a, b) => {
            let c = a;
            while (c % b !== 0) {
                c += a;
            }
            return c;
        };
        const invertArray = (array) => {
            for (let i = 0; i < array.length; i++) {
                array[i] = array[i] * -1;
            }
            return array;
        };

        const simplify = (amount, eqArray) => {
            if (amount === 2) {
                const a = eqArray[0],
                    b = eqArray[1],
                    multOne = lcm(a[0], b[0]) / a[0],
                    multTwo = lcm(a[0], b[0]) / b[0];
                for (let i = 0; i < b.length; i++) {
                    a[i] *= multOne;
                    b[i] *= multTwo;
                }
                if (a[0] + b[0] !== 0) {
                    invertArray(a);
                }
                for (let i = 0; i < b.length; i++) {
                    b[i] += a[i];
                }
                return b;
            } else if (amount === 3) {
                const a = eqArray[0],
                    b = eqArray[1],
                    c = eqArray[2],
                    simpleTwo = simplify(2, [a, b]),
                    simpleThree = simplify(2, [a, c]),
                    multTwo = lcm(simpleTwo[1], simpleThree[1]) / simpleTwo[1],
                    multThree = lcm(simpleTwo[1], simpleThree[1]) / simpleThree[1];
                for (let a = 0; a < simpleThree.length; a++) {
                    simpleTwo[a] *= multTwo;
                    simpleThree[a] *= multThree;
                }
                if (simpleTwo[1] + simpleThree[1] !== 0) {
                    invertArray(simpleTwo);
                }
                for (let a = 0; a < simpleThree.length; a++) {
                    simpleThree[a] += simpleTwo[a];
                }
                return [simpleTwo, simpleThree];
            } else if (amount === 4) {
                const a = eqArray[0],
                    b = eqArray[1],
                    c = eqArray[2],
                    d = eqArray[3],
                    simpleTwoThree = simplify(3, [a, b, c]),
                    simpleFour = simplify(2, [a, d]),
                    changingTwo = simpleTwoThree[0],
                    changingThree = simpleTwoThree[1],
                    multTwo = lcm(changingTwo[1], simpleFour[1]) / changingTwo[1],
                    firstMultFour = lcm(changingTwo[1], simpleFour[1]) / simpleFour[1];
                for (let a = 0; a < simpleFour.length; a++) {
                    simpleFour[a] *= firstMultFour;
                    changingTwo[a] *= multTwo;
                }
                if (simpleFour[1] + changingTwo[1] !== 0) {
                    invertArray(changingTwo);
                }
                for (let a = 0; a < simpleFour.length; a++) {
                    simpleFour[a] += changingTwo[a];
                }
                const multThree = lcm(changingThree[2], simpleFour[2]) / changingThree[2],
                    secondMultFour = lcm(changingThree[2], simpleFour[2]) / simpleFour[2];
                for (let a = 0; a < simpleFour.length; a++) {
                    changingThree[a] *= multThree;
                    simpleFour[a] *= secondMultFour;
                }
                if (simpleFour[2] + changingThree[2] !== 0) {
                    invertArray(changingThree);
                }
                for (let a = 0; a < simpleFour.length; a++) {
                    simpleFour[a] += changingThree[a];
                }
                return [simpleTwoThree[0], simpleTwoThree[1], simpleFour];
            }
        };

        const answer = (amount, eqArray) => {
            if (amount === 2) {
                const a = eqArray[0],
                    b = eqArray[1],
                    y = b[2] / b[1],
                    x = (a[2] - a[1] * y) / a[0];
                return [x, y];
            } else if (amount === 3) {
                const a = eqArray[0],
                    b = eqArray[1],
                    c = eqArray[2],
                    z = c[3] / c[2],
                    y = (b[3] - b[2] * z) / b[1],
                    x = (a[3] - (a[2] * z + a[1] * y)) / a[0];
                return [x, y, z];
            } else if (amount === 4) {
                const a = eqArray[0],
                    b = eqArray[1],
                    c = eqArray[2],
                    d = eqArray[3],
                    z = d[4] / d[3],
                    y = (c[4] - c[3] * z) / c[2],
                    x = (b[4] - (b[3] * z + b[2] * y)) / b[1],
                    w = (a[4] - (a[3] * z + a[2] * y + a[1] * x)) / a[0];
                return [w, x, y, z];
            }
        };

        const dimension = Number(this.state.amount);
        if (dimension === 2) {
            const eqOne = [this.state.xOne, this.state.yOne, this.state.answerOne],
                eqTwo = [this.state.xTwo, this.state.yTwo, this.state.answerTwo],
                simpleY = simplify(2, [eqOne, eqTwo]),
                valuesXY = answer(2, [eqOne, simpleY]);
            this.setState({
                output: 'x = ' + valuesXY[0] + '\ny = ' + valuesXY[1]
            });
        } else if (dimension === 3) {
            const eqOne = [this.state.xOne, this.state.yOne, this.state.zOne, this.state.answerOne],
                eqTwo = [this.state.xTwo, this.state.yTwo, this.state.zTwo, this.state.answerTwo],
                eqThree = [this.state.xThree, this.state.yThree, this.state.zThree, this.state.answerThree],
                simpleYZ = simplify(3, [eqOne, eqTwo, eqThree]),
                valuesXYZ = answer(3, [eqOne, simpleYZ[0], simpleYZ[1]]);
            this.setState({
                output: 'x = ' + valuesXYZ[0] + '\ny = ' + valuesXYZ[1] + '\nz = ' + valuesXYZ[2]
            });
        } else if (dimension === 4) {
            const eqOne = [this.state.wOne, this.state.xOne, this.state.yOne, this.state.zOne, this.state.answerOne],
                eqTwo = [this.state.wTwo, this.state.xTwo, this.state.yTwo, this.state.zTwo, this.state.answerTwo],
                eqThree = [this.state.wThree, this.state.xThree, this.state.yThree, this.state.zThree, this.state.answerThree],
                eqFour = [this.state.wFour, this.state.xFour, this.state.yFour, this.state.zFour, this.state.answerFour],
                simpleXYZ = simplify(4, [eqOne, eqTwo, eqThree, eqFour]),
                valuesXYZ = answer(4, [eqOne, simpleXYZ[0], simpleXYZ[1], simpleXYZ[2]]);
            this.setState({
                output: 'w = ' + valuesXYZ[0] + '\nx = ' + valuesXYZ[1] + '\ny = ' + valuesXYZ[2] + '\nz = ' + valuesXYZ[3]
            });
        } else {
            this.setState({
                output: 'ERROR'
            });
        }
    }

    render() {
        let buttonValues, displayValues, textValues;
        switch(this.state.type) {
            case "Two Variables":
                buttonValues = [
                    'type',
                    ['xOne', 'yOne', 'answerOne'],
                    ['xTwo', 'yTwo', 'answerTwo'],
                    'select'
                ];
                displayValues = [this.state.type, '2', '2', '…'];
                textValues = [
                    '',
                    [this.state.xOne, this.state.yOne, this.state.answerOne],
                    [this.state.xTwo, this.state.yTwo, this.state.answerTwo],
                    ''
                ];
                break;
            case "Three Variables":
                buttonValues = [
                    'type',
                    ['xOne', 'yOne', 'zOne', 'answerOne'],
                    ['xTwo', 'yTwo', 'zTwo', 'answerTwo'],
                    ['xThree', 'yThree', 'zThree', 'answerThree'],
                    'select'
                ];
                displayValues = [this.state.type, '3', '3', '3', '…'];
                textValues = [
                    '',
                    [this.state.xOne, this.state.yOne, this.state.zOne, this.state.answerOne],
                    [this.state.xTwo, this.state.yTwo, this.state.zTwo, this.state.answerTwo],
                    [this.state.xThree, this.state.yThree, this.state.zThree, this.state.answerThree],
                    ''
                ];
                break;
            default:
                buttonValues = [
                    'type',
                    ['wOne', 'xOne', 'yOne', 'zOne', 'answerOne'],
                    ['wTwo', 'xTwo', 'yTwo', 'zTwo', 'answerTwo'],
                    ['wThree', 'xThree', 'yThree', 'zThree', 'answerThree'],
                    ['wFour', 'xFour', 'yFour', 'zFour', 'answerFour'],
                    'select'
                ];
                displayValues = [this.state.type, '4', '4', '4', '4', '…'];
                textValues = [
                    '',
                    [this.state.wOne, this.state.xOne, this.state.yOne, this.state.zOne, this.state.answerOne],
                    [this.state.wTwo, this.state.xTwo, this.state.yTwo, this.state.zTwo, this.state.answerTwo],
                    [this.state.wThree, this.state.xThree, this.state.yThree, this.state.zThree, this.state.answerThree],
                    [this.state.wFour, this.state.xFour, this.state.yFour, this.state.zFour, this.state.answerFour],
                    ''
                ];
                break;
        }
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
                <Pad
                    type={'large'}
                    mode={this.props.mode}
                    buttonValues={buttonValues}
                    displayValues={displayValues}
                    textValues={textValues}
                    onClick={this.onClick}
                    onChange={this.onChange}
                    onModeClick={this.props.onModeChange}
                />
            </div>
        );
    }
}
SimultaneousEquation.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func.isRequired
};