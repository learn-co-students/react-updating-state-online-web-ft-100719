import React, {Component} from 'react'
import ClickityClick from './components/ClickityClick';
import LightSwitch from './components/LightSwitch'

class App extends Component {
    render() {
        return(
            <div>
                <ClickityClick />
                <LightSwitch />
            </div>
        )
    }
}

export default App