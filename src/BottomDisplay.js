import React, { Component } from 'react';

class BottomDisplay extends Component {
    render() {
        return <div id="bottomScreen">{this.props.currentVal}</div>;
    }
}

export default BottomDisplay;