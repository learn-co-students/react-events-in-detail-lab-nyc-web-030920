import React, { Component } from 'react';

class CoordinatesButton extends Component {

    createCoordinateArray = (event) => { 
        let coordinateArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinateArray)
    }

    render() {
        return (
            <button onClick={this.createCoordinateArray}></button>
        );
    }
}

export default CoordinatesButton;




