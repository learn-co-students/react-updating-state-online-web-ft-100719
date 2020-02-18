import React, { Component } from 'react';

export default class ClickityClick extends Component {
  constructor() {
    super()
    
    this.state = {
      toggled: false,
    }
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled
      }
    }, () => console.log(this.state.toggled))
  }

  render() {
    return(
      <div>
        <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}
