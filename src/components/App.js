import React from 'react';
import { ModeSelect } from "./modeSelect/modeSelectHandler";
import { BasicCalc } from "./basicCalc/basicHandler";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'select'
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(object) {
    const newMode = object.target.value;
    this.setState({
      mode: newMode
    });
  }

  render() {
    switch (this.state.mode) {
      case 'basic':
        return <BasicCalc mode={this.state.mode} onModeChange={this.changeMode} />;
      default:
        return <ModeSelect mode={this.state.mode} onButtonPress={this.changeMode} />;
    }
  }
}