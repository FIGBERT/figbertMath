import React from 'react';
import { ModeSelect } from "./highLevel/modeSelect";
import { SimpleCalc } from "./highLevel/simpleCalc";
import { AngSizeCalc } from "./highLevel/angSize";
import { ConsecNumCalc } from "./highLevel/consecNum";
import { PolygonAngle } from "./highLevel/polygonAngle";

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
    } else if (this.state.mode === 'consecNum') {
      return <ConsecNumCalc mode={this.state.mode} onModeChange={this.changeMode}/>;
    } else if (this.state.mode === 'polyAng') {
      return <PolygonAngle mode={this.state.mode} onModeChange={this.changeMode} />;
    } else {
      return <ModeSelect mode={this.state.mode} onButtonPress={this.changeMode} />;
    }
  }
}