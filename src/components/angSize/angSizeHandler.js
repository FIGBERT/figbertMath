import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../calcOut";
import { AngSizePad } from "./angSizePad";

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
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(object) {
        const objectID = object.target.value;
        if (objectID === '⍺') {
            if (!this.state.aTruth && !(this.state.rTruth && this.state.dTruth)) {
                this.setState({
                    aVal: '',
                    aTruth: !this.state.aTruth
                });
            } else if (this.state.aTruth) {
                this.setState({
                    aVal: '',
                    aTruth: !this.state.aTruth
                });
            }
        } else if (objectID === 'r') {
            if (!this.state.rTruth && !(this.state.aTruth && this.state.dTruth)) {
                this.setState({
                    rVal: '',
                    rTruth: !this.state.rTruth
                });
            } else if (this.state.rTruth) {
                this.setState({
                    rVal: '',
                    rTruth: !this.state.rTruth
                });
            }
        } else if (objectID === 'd') {
            if (!this.state.dTruth && !(this.state.aTruth && this.state.rTruth)) {
                this.setState({
                    dVal: '',
                    dTruth: !this.state.dTruth
                });
            } else if (this.state.dTruth) {
                this.setState({
                    dVal: '',
                    dTruth: !this.state.dTruth
                });
            }
        }
    }

    onChange(object) {
        const value = object.target.value,
            name = object.target.name;
        if (name === '⍺') {
            this.setState({
                aVal: value
            });
        } else if (name === 'r') {
            this.setState({
                rVal: value
            });
        } else if (name === 'd') {
            this.setState({
                dVal: value
            });
        }
    }

    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
                <AngSizePad
                    aVal={this.state.aVal}
                    aTruth={this.state.aTruth}
                    rVal={this.state.rVal}
                    rTruth={this.state.rTruth}
                    dVal={this.state.dVal}
                    dTruth={this.state.dTruth}
                    onChange={this.onChange}
                    onClick={this.onClick}
                    onModeChange={this.props.onModeChange}
                />
            </div>
        );
    }
}

AngSizeCalc.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func.isRequired
};