import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

const values = [
        'basic',
        'angSize',
        'consecNum',
        'simultaneousEQ',
        'polyAng'
    ],
    displayValues = [
        'Simple Calculator',
        'Angular/Real Size',
        'Consecutive Number',
        'Simultaneous Equations',
        'Polygon Angles'
    ];

export class ModeSelect extends React.Component {
    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} />
                <Pad
                    buttonValues={values}
                    displayValues={displayValues}
                    mode={this.props.mode}
                    onClick={this.props.onButtonPress}
                    style={{alignContent: 'center'}}
                    type={'large'}
                />
            </div>
        );
    }
}
ModeSelect.propTypes = {
    mode: PropTypes.string.isRequired
};
