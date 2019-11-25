import React from 'react';
import { BasicCalc } from "./basicCalc/basicHandler";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'basic'
    };
  }

  render() {
    if (this.state.mode === 'basic') {
      return <BasicCalc />;
    } else {
      return <div />;
    }
  }
}