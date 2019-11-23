import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

export class CalcButton extends React.Component {
    buttonFlex = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '3vw'
    };

    render() {
        return (
            <div style={this.buttonFlex} className='calc calc__button'>
                {this.props.value}
            </div>
        );
    }
}
CalcButton.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export class BasicPad extends React.Component {
    render() {
        return (
            <div className='calc calc__pad' style={{background: '#1d1d1d'}}>
                <div className='calc calc__row'>
                    <CalcButton value={'AC'} />
                    <CalcButton value={'±'} />
                    <CalcButton value={'%'} />
                    <CalcButton value={'÷'} />
                </div>
                <div className='calc calc__row'>
                    <CalcButton value={'7'} />
                    <CalcButton value={'8'} />
                    <CalcButton value={'9'} />
                    <CalcButton value={'×'} />
                </div>
                <div className='calc calc__row'>
                    <CalcButton value={'4'} />
                    <CalcButton value={'5'} />
                    <CalcButton value={'6'} />
                    <CalcButton value={'–'} />
                </div>
                <div className='calc calc__row'>
                    <CalcButton value={'1'} />
                    <CalcButton value={'2'} />
                    <CalcButton value={'3'} />
                    <CalcButton value={'+'} />
                </div>
                <div className='calc calc__row'>
                    <CalcButton style={{flexGrow: 2}} value={'0'} />
                    <CalcButton value={'.'} />
                    <CalcButton value={'='} />
                </div>
            </div>
        );
    }
}
