// Code CoordinatesButton Component Here
import React from 'react'

export default class Coordinatesbutton extends React.Component{
    xyButton = (event)=>{
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render(){
        return(
            <button onClick={this.xyButton}>Coords</button>
        )
    }
}
