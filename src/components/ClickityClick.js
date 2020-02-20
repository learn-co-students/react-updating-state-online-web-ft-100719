// Code ClickityClick Component Here
import ButtonCounter from './ButtonCounter';
import LightSwitch from './LightSwitch'
import React, { Component } from 'react'

export default class ClickityClick extends Component {
  constructor(){
    super();
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      }
    };
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: true,
      currentTheme: 'blue',
      addressInfo: {
        ...this.state.addressInfo,
        city: 'New York City'
      }
    }, () => console.log(this.state.hasBeenClicked)) 
  }

  render(){
    return(
      <div>
        <LightSwitch />
        <hr></hr>
        <ButtonCounter />
        <hr></hr>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>ClickityClick</button>
      </div>
    )
  }
}
