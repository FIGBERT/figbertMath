import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

export class CalcOut extends React.Component {
    render() {
        return (
            <div className='calc calc__out'>
                {this.props.output}
                <br/>
                <span style={{fontSize: 'large'}}>{this.props.input}</span>
            </div>
        );
    }
}

CalcOut.propTypes = {
    output: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    input: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};