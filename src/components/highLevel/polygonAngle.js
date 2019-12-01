import React from 'react';
import PropTypes from 'prop-types';
import { CalcOut } from "../lowLevel/calcOut";
import { Pad } from "../lowLevel/pad";

export class PolygonAngle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '',
            sides: '',
            type: 'Regular'
        };
        this.onTypeClick = this.onTypeClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.calcAngles = this.calcAngles.bind(this);
    }

    onChange(object) {
        const value = object.target.value;
        this.setState({ sides: value }, () => {
            if (this.state.sides !== '') {
                this.calcAngles()
            } else {
                this.setState({
                    output: ''
                })
            }
        });
    }

    onTypeClick() {
        if (this.state.type === 'Regular') {
            this.setState({ type: 'Irregular Convex' }, () => {
                if (this.state.sides !== '') {
                    this.calcAngles()
                }
            });
        } else {
            this.setState({ type: 'Regular'}, () => {
                if (this.state.sides !== '') {
                    this.calcAngles()
                }
            });
        }
    }

    calcAngles() {
        const sides = Math.round(Number(this.state.sides));
        if (sides < 3) {
            this.setState({
                output: 'ERROR'
            });
        } else {
            const totalInterior = (sides - 2) * 180;
            if (this.state.type === 'Regular') {
                let eachInterior = totalInterior / sides,
                    eachExterior = 360 / sides;
                if (eachInterior % 1 !== 0) {
                    eachInterior = '~' + Math.round(eachInterior);
                }
                if (eachExterior % 1 !== 0) {
                    eachExterior = '~' + Math.round(eachExterior);
                }
                this.setState({
                    output: 'Total Interior: ' + totalInterior + '°\nEach Interior: ' + eachInterior + '°\nEach Exterior: ' + eachExterior + '°'
                })
            } else {
                this.setState({
                    output: 'Total Interior: ' + totalInterior + '°'
                })
            }
        }
    }

    render() {
        return (
            <div>
                <CalcOut mode={this.props.mode} output={this.state.output} />
                <Pad
                    type={'large'}
                    mode={this.props.mode}
                    buttonValues={['type', 'sides', 'select']}
                    displayValues={[this.state.type, '# of sides', '…']}
                    textValues={[this.state.sides]}
                    onClick={this.onTypeClick}
                    onChange={this.onChange}
                    onModeClick={this.props.onModeChange}
                />
            </div>
        );
    }
}
PolygonAngle.propTypes = {
    mode: PropTypes.string.isRequired,
    onModeChange: PropTypes.func.isRequired
};