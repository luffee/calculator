import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return <div>
            <button className="doubleWide red" value="AC" onClick={this.props.clear}>AC</button>
            <button value="/" onClick={this.props.operator}>/</button>
            <button value="x" onClick={this.props.operator}>x</button>
            <button value="7" onClick={this.props.numbers}>7</button>
            <button value="8" onClick={this.props.numbers}>8</button>
            <button value="9" onClick={this.props.numbers}>9</button>
            <button value="-" onClick={this.props.operator}>-</button>
            <button value="4" onClick={this.props.numbers}>4</button>
            <button value="5" onClick={this.props.numbers}>5</button>
            <button value="6" onClick={this.props.numbers}>6</button>
            <button value="+" onClick={this.props.operator}>+</button>
            <button value="1" onClick={this.props.numbers}>1</button>
            <button value="2" onClick={this.props.numbers}>2</button>
            <button value="3" onClick={this.props.numbers}>3</button>
            <button className="doubleWide" value="0" onClick={this.props.numbers}>0</button>
            <button value="." onClick={this.props.decimal}>.</button>
            <button className="doubleTall" value="=" onClick={this.props.equals}>=</button>
        </div>
    }
}

export default Buttons;