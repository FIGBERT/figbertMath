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
            amount: '2'
        };
    }

    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
            </div>
        );
    }
}
SimultaneousEquation.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func.isRequired
};