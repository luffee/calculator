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
      clicked: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.hadleClear = this.hadleClear.bind(this);

  }
  handleClick(value) {
    this.setState({clicked: value.target.value})
  }
  hadleClear(value) {
    this.setState({
      clicked: "",
      currentVal: "0",
      formula: "0"
    })
  }





  render() {
    return (
      <div className="calculator">
        <Display formula={this.state.formula}/>
        <BottomDisplay currentVal={this.state.currentVal}/>
        <Buttons numbers={this.handleClick}
        clear={this.hadleClear} />


        
      </div>
    );
  }
}

export default Calculator;
