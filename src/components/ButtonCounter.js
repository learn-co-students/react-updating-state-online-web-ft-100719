import React, { Component } from 'react'

class ButtonCounter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>CLICK ME</button>
            </div>
        )
    }
}

export default ButtonCounter