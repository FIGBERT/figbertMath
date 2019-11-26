import React from 'react';
import PropTypes from 'prop-types';

let basicCSS = {
    textAlign: 'right',
    lineHeight: '50%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
};

let selectCSS = {
    width: '20vmax',
    textAlign: 'center',
};

let angSizeCSS = {
    width: '20vmax'
};

export class CalcOut extends React.Component {
    render() {
        switch (this.props.mode) {
            case 'basic':
                return (
                    <div className='calc calc__out' style={basicCSS}>
                        <div style={{fontSize: '4vmax', marginTop: '0.5vmax', marginBottom: '2vmax'}}>{this.props.output}</div>
                        <div style={{fontSize: '1.5vmax'}}>{this.props.input}</div>
                    </div>
                );
            case 'angSize':
                return (
                    <div className='calc calc__out' style={angSizeCSS}>
                        <span style={{fontSize: '2vmax', textAlign: 'left', lineHeight: '100%'}}>
                            {this.props.output}
                        </span>
                    </div>
                );
            default:
                return (
                    <div className='calc calc__out' style={selectCSS}>
                        <span style={{fontSize: '2vmax', textAlign: 'left', lineHeight: '100%'}}>
                            Mode Select
                        </span>
                    </div>
                );
        }
    }
}

CalcOut.propTypes = {
    mode: PropTypes.string.isRequired,
    output: PropTypes.string,
    input: PropTypes.string
};