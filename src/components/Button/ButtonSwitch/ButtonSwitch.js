import React,{Component} from 'react'
import Switch from 'react-switch'


class ButtonSwitch extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
      this.disabledButton = this.disabledButton.bind(this);
    }
   
    handleChange(checked) {
      this.setState({ checked });
    }
    disabledButton(disabled){
      this.setState({disabled})
    }

   
    render() {
      return (
        <label>
          <Switch onChange={this.handleChange} checked={this.state.checked} disabled={this.disabledButton} />
        </label>
      );
    }
  }
  export default ButtonSwitch