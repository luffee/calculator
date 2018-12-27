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
      formula: "",
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
    if (!this.state.formula) {
      this.setState({
        formula: num.target.value,
        currentVal: num.target.value,
      })

    } else{
    this.setState({
      currentVal: this.state.currentVal + num.target.value,
      formula: this.state.formula + num.target.value

    })
  }
  }
  handleClear() {
    this.setState({
      clicked: "",
      currentVal: "0",
      formula: "",
      operator: "",
      decimal: ""

    })
  }
  handleOperatorClick(op) {
    // eslint-disable-next-line default-case
    switch (op.target.value) {
      case "+": 
      if (this.state.currentVal === "+" || this.state.currentVal === "-" || this.state.currentVal === "x" || this.state.currentVal === "/" || this.state.currentVal === "*") {
        
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula.slice(0,-1) + op.target.value
        });
      } else {
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula + op.target.value
        })
      }
      break;
      case "-": 
      if (this.state.currentVal === "+" || this.state.currentVal === "-" || this.state.currentVal === "*" || this.state.currentVal === "/" || this.state.currentVal === "*") {
        
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula.slice(0,-1) + op.target.value
        });
      } else {
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula + op.target.value
        })
      }
      break;
      case "x": 
      if (this.state.currentVal === "+" || this.state.currentVal === "-" || this.state.currentVal === "x" || this.state.currentVal === "/" || this.state.currentVal === "*") {
        
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula.slice(0,-1) + "*"
        });
      } else {
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula + "*"
        })
      }
      break;
      case "/": 
      if (this.state.currentVal === "+" || this.state.currentVal === "-" || this.state.currentVal === "x" || this.state.currentVal === "/" || this.state.currentVal === "*") {
        
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula.slice(0,-1) + op.target.value
        });
      } else {
        this.setState({
          currentVal: op.target.value,
          formula: this.state.formula + op.target.value
        })
      }
      break;
      
    }
  }
  handleDecimalClick(op) {
    this.setState({
      decimal: op.target.value
    })
  }
  handleEqualClick(op) {
    if (this.state.formula.slice(-1) === "+" || this.state.formula.slice(-1) === "-" || this.state.formula.slice(-1) === "/" || this.state.formula.slice(-1) === "*") {
      let pom = eval(this.state.formula.slice(0,-1));
      this.setState({
        formula: pom,
        currentVal: pom
      })

    } else {
      let pom = eval(this.state.formula);
      this.setState({
        formula: pom,
        currentVal: pom
      })

    }
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
