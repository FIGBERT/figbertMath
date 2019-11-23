import React from 'react';
import './App.css';
import { CalcOut } from "./calcOut";
import { BasicPad } from "./calcPads";

export class App extends React.Component {
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
          <CalcOut output={this.state.output} input={this.state.input} />
          <BasicPad />
        </div>
    );
  }
}