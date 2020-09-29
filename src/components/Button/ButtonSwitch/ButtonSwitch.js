import React, { Component } from 'react'
import Switch from 'react-switch'
import './ButtonSwitch.css'


class ButtonSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
    this.disabledButton = this.disabledButton.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  disabledButton(disabled) {
    this.setState({ disabled })
  }


  render() {
    return (
      <div className="ContainerButtonSwitch">
          <span>{this.state.checked ? 'Disponível' : 'Indisponível'}</span>
          <div>
            <Switch
              onChange={this.handleChange}  checked={this.state.checked}
              offColor="#C72828" />
          </div>
        </div>
    );
  }
}
export default ButtonSwitch