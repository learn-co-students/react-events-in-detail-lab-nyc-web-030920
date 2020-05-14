// Code CoordinatesButton Component Here
import React from 'react';

// functional component for slight performance edge than class component
const CoordinatesButton = props => {
  return (
    <button onClick={event  => {
      let coordinates = []
      coordinates.push(event.clientX, event.clientY)
      props.onReceiveCoordinates(coordinates)
    }}>Coordinates Button</button>
  )
}

export default CoordinatesButton
/* 

event.clientX and event.clientY are event properties that provide the current x/y position of a mouse

*/