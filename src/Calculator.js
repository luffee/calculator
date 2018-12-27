import React, { Component } from 'react';
import './App.css';
import Display from "./Display";
import BottomDisplay from './BottomDisplay';
import Buttons from './Buttons'

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentVal: "0",
      formula: "0",
      clicked: "",
      operator: "",
      decimal: ""

    }
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
    this.handleDecimalClick = this.handleDecimalClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);

  }
  handleNumberClick(num) {
    this.setState({
      clicked: num.target.value
    })
  }
  handleClear() {
    this.setState({
      clicked: "",
      currentVal: "0",
      formula: "0",
      operator: "",
      decimal: ""

    })
  }
  handleOperatorClick(op) {
    this.setState({
      operator: op.target.value
    })
  }
  handleDecimalClick(op) {
    this.setState({
      decimal: op.target.value
    })
  }
  handleEqualClick(op) {
    this.setState({
      currentVal: "rezultat"
    })
  }
  

  render() {
    return (
      <div className="calculator">
        <Display formula={this.state.formula}/>
        <BottomDisplay currentVal={this.state.currentVal}/>
        <Buttons numbers={this.handleNumberClick}
        clear={this.handleClear} operator={this.handleOperatorClick}
        decimal={this.handleDecimalClick} equals={this.handleEqualClick}/>


        
      </div>
    );
  }
}

export default Calculator;
