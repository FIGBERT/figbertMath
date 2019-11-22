import React from 'react';
import '../App.css';

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'basic',
            output: '000000',
            input: '0000'
        };
    }

    render() {
        return (
            <div>
                <div id='calcOut'>
                    {this.state.output}
                    <br/>
                    <span style={{fontSize: 'large'}}>{this.state.input}</span>
                </div>
            </div>
        );
    }
}