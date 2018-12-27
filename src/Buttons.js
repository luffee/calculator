import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return <div>
            <button className="doubleWide">AC</button>
            <button>/</button>
            <button>x</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="doubleWide">0</button>
            <button>.</button>
            <button className="doubleTall">=</button>
        </div>
    }
}

export default Buttons;