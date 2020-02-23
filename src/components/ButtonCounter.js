import React, { Component } from 'react'

 class ButtonCounter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default ButtonCounter