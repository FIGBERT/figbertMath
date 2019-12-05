import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

export class SimultaneousEquation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: [],
            dimension: 2,
            coefficients: [['', ''], ['', '']],
            sums: ['', '']
        };
        this.checkSolve = this.checkSolve.bind(this);
        this.modifyMatrix = this.modifyMatrix.bind(this);
        this.solveMatrix = this.solveMatrix.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(object) {
        let name = object.target.name,
            i, k;
        const value = object.target.value;
        if (name.indexOf('c') > -1) {
            name = name.substr(1);
            i = Number(name.split('_')[0]);
            k = Number(name.split('_')[1]);
            this.setState({
                coefficients: update(this.state.coefficients, {[i]: {[k]: {$set: value}}})
            }, () => {
                this.checkSolve()
            });
        } else if (name.indexOf('s') > -1) {
            i = Number(name.substr(1));
            this.setState({
                sums: update(this.state.sums, {[i]: {$set: value}})
            }, () => {
                this.checkSolve()
            });
        } else {
            this.setState({
                output: 'ERROR'
            });
        }
    }

    checkSolve() {
        const coefficients = JSON.parse(JSON.stringify(this.state.coefficients)),
            sums = JSON.parse(JSON.stringify(this.state.sums));
        let truth = true;
        for (let i = 0; i < coefficients.length; i++) {
            for (let k = 0; k < coefficients[i].length; k ++) {
                if (coefficients[i][k] === '') {
                    truth = false;
                } else {
                    coefficients[i][k] = Number(coefficients[i][k]);
                }
            }
        }
        if (truth) {
            for (let i = 0; i < sums.length; i++) {
                if (sums[i] === '') {
                    truth = false;
                } else {
                    sums[i] = Number(sums[i]);
                }
            }
        }
        if (truth) {
            this.solveMatrix(coefficients, sums)
        }
    }

    modifyMatrix(object) {
        const value = object.target.value;
        let numOfVars = [],
            rows = [],
            sums = [],
            newDimension;
        if (value === 'raise') {
            newDimension = this.state.dimension + 1;
        } else if (value === 'lower') {
            newDimension = this.state.dimension - 1;
            if (newDimension < 2) {
                newDimension = 2;
            }
        }
        for (let i = 0; i < newDimension; i++) {
            numOfVars.push('');
            sums.push('');
        }
        for (let i = 0; i < newDimension; i++) {
            rows.push(numOfVars);
        }
        this.setState({
            dimension: newDimension,
            coefficients: rows,
            sums: sums
        });
    }

    solveMatrix(equations, sums) {
        let abs = Math.abs;
        function array_fill(i, n, v) {
            let a = [];
            while (i < n) {
                a.push(v);
                i++;
            }
            return a;
        }

        // Adds the sums to the equations array
        for (let i = 0; i < equations.length; i++) {
            equations[i].push(sums[i]);
        }
        const numberOfEquations = equations.length;

        for (let i = 0; i < numberOfEquations; i++) {
            // Iterates over the first column of every row below the current one (i) and determines which row is the largest
            let maxEl = abs(equations[i][i]),
                maxRow = i;
            for (let k = i + 1; k < numberOfEquations; k++) {
                if (abs(equations[k][i]) > maxEl) {
                    maxEl = abs(equations[k][i]);
                    maxRow = k;
                }
            }
            // Swaps the larger row and the current row, if a swap should be made
            if (maxRow !== i) {
                for (let k = i; k < numberOfEquations + 1; k++) {
                    const tmp = equations[maxRow][k];
                    equations[maxRow][k] = equations[i][k];
                    equations[i][k] = tmp;
                }
            }
            // Makes all lower numbers in the column zero
            for (let k = i + 1; k < numberOfEquations; k++) {
                const c = -equations[k][i] / equations[i][i];
                for (let j = i; j < numberOfEquations + 1; j++) {
                    if (i === j) {
                        equations[k][j] = 0;
                    } else {
                        equations[k][j] += c * equations[i][j];
                    }
                }
            }
        }

        //Solve the simplified matrix
        sums = array_fill(0, numberOfEquations, 0);
        for (let i = numberOfEquations - 1; i > -1; i--) {
            sums[i] = equations[i][numberOfEquations] / equations[i][i];
            for (let k = i - 1; k > -1; k--) {
                equations[k][numberOfEquations] -= equations[k][i] * sums[i];
            }
        }

        //Set the output to the array of values
        this.setState({
            output: sums
        });
    }

    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
                <Pad
                    type={'large'}
                    mode={this.props.mode}
                    buttonValues={['range', [this.state.coefficients, this.state.sums], 'select']}
                    displayValues={[this.state.dimension, undefined, '…']}
                    onClick={this.modifyMatrix}
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
