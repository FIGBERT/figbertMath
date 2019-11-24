import React from 'react';
import { CalcOut } from "./calcOut";
import { Pad } from "./calcPads/pad";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'basic',
      output: 0,
      input: [0]
    };
  }

  render() {
    return (
        <div>
          <CalcOut output={this.state.output} input={this.state.input} />
          <Pad mode='basic'/>
        </div>
    );
  }
}