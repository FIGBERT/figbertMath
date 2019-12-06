import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

export class AngSizeCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '',
            aVal: '',
            aTruth: false,
            rVal: '',
            rTruth: false,
            dVal: '',
            dTruth: false
        };
        this.calcAngle = this.calcAngle.bind(this);
        this.calcDistance = this.calcDistance.bind(this);
        this.calcSize = this.calcSize.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    calcAngle() {
        const size = Number(this.state.rVal),
            distance = Number(this.state.dVal),
            angle = (180 * size) / (3.14 * distance),
            message = '⍺ = ' + angle;
        this.setState({
            output: message
        });
    }

    calcDistance() {
        const size = Number(this.state.rVal),
            angle = Number(this.state.aVal),
            distance = (180 * size) / (3.14 * angle),
            message = 'd = ' + distance;
        this.setState({
            output: message
        });
    }

    calcSize() {
        const angle = Number(this.state.aVal),
            distance = Number(this.state.dVal),
            size = (angle * 3.14 * distance) / 180,
            message = 'r = ' + size;
        this.setState({
            output: message
        });
    }

    onChange(object) {
        const value = object.target.value,
            name = object.target.name;
        if (name === '⍺') {
            this.setState({ aVal: value }, () => {
                if (this.state.rTruth) {
                    this.calcDistance()
                } else if (this.state.dTruth) {
                    this.calcSize()
                }
            });
        } else if (name === 'r') {
            this.setState({ rVal: value }, () => {
                if (this.state.aTruth) {
                    this.calcDistance()
                } else if (this.state.dTruth) {
                    this.calcAngle()
                }
            });
        } else if (name === 'd') {
            this.setState({ dVal: value }, () => {
                if (this.state.aTruth) {
                    this.calcSize()
                } else if (this.state.rTruth) {
                    this.calcAngle()
                }
            });
        }
    }

    onClick(object) {
        const objectID = object.target.value;
        if (objectID === '⍺') {
            if (!this.state.aTruth && !(this.state.rTruth && this.state.dTruth)) {
                this.setState({
                    aVal: '',
                    aTruth: !this.state.aTruth,
                    output: ''
                });
            } else if (this.state.aTruth) {
                this.setState({
                    aVal: '',
                    aTruth: !this.state.aTruth,
                    output: ''
                });
            }
        } else if (objectID === 'r') {
            if (!this.state.rTruth && !(this.state.aTruth && this.state.dTruth)) {
                this.setState({
                    rVal: '',
                    rTruth: !this.state.rTruth,
                    output: ''
                });
            } else if (this.state.rTruth) {
                this.setState({
                    rVal: '',
                    rTruth: !this.state.rTruth,
                    output: ''
                });
            }
        } else if (objectID === 'd') {
            if (!this.state.dTruth && !(this.state.aTruth && this.state.rTruth)) {
                this.setState({
                    dVal: '',
                    dTruth: !this.state.dTruth,
                    output: ''
                });
            } else if (this.state.dTruth) {
                this.setState({
                    dVal: '',
                    dTruth: !this.state.dTruth,
                    output: ''
                });
            }
        }
    }

    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
                <Pad
                    buttonValues={['⍺', 'r', 'd', 'select']}
                    disabledTruths={[this.state.aTruth, this.state.rTruth, this.state.dTruth]}
                    displayValues={['⍺', 'r', 'd', '…']}
                    mode={this.props.mode}
                    onChange={this.onChange}
                    onClick={this.onClick}
                    onModeClick={this.props.onModeChange}
                    textValues={[this.state.aVal, this.state.rVal, this.state.dVal]}
                    type={'large'}
                />
            </div>
        );
    }
}

AngSizeCalc.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func.isRequired
};
