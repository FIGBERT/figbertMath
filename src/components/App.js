import React from 'react';
import { ModeSelect } from "./complex/modeSelect";
import { SimpleCalc } from "./complex/simpleCalc";
import { AngSizeCalc } from "./complex/angSize";

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
    if (this.state.mode === 'basic') {
      return <SimpleCalc mode={this.state.mode} onModeChange={this.changeMode}/>;
    } else if (this.state.mode === 'angSize') {
      return <AngSizeCalc mode={this.state.mode} onModeChange={this.changeMode}/>;
    } else {
      return <ModeSelect mode={this.state.mode} onButtonPress={this.changeMode} />;
    }
  }
}