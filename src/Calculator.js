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
      formula: "0"
    }

  }
  render() {
    return (
      <div className="calculator">
        <Display formula={this.state.formula}/>
        <BottomDisplay currentVal={this.state.currentVal}/>
        <Buttons />


        
      </div>
    );
  }
}

export default Calculator;
