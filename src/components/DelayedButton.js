// Code DelayedButton Component Here
import React from 'react';

// class component just to practice using different variations
export default class DelayedButton extends React.Component {
  handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    // destructure props to utilize as own k:v
    // const {onDelayedClick, delay} = this.props
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}
