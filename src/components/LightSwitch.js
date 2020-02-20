import React, { Component } from 'react'

export default class LightSwitch extends Component{
  constructor(){
    super()
    this.state = {
      toggled: false
    }
  }


  handleClick = () => {
    this.setState( previoisState => {
      return {
        toggled: !previoisState.toggled
      }
    })
  }

  render(){
    return(
      <button onClick={this.handleClick}>{this.state.toggled ? "ON" : "OFF"}</button>
    )
  }
}
