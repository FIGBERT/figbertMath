import React from 'react';
import PropTypes from 'prop-types';

export class CalcOut extends React.Component {
    render() {
        return (
            <div className='calc calc__out'>
                <div style={{fontSize: '4vmax', marginTop: '0.5vmax', marginBottom: '2vmax'}}>{this.props.output}</div>
                <div style={{fontSize: '1.5vmax'}}>{this.props.input}</div>
            </div>
        );
    }
}

CalcOut.propTypes = {
    output: PropTypes.number.isRequired,
    input: PropTypes.arrayOf(PropTypes.number).isRequired
};