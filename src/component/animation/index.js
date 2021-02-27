import React from 'react'
import "./style.css";

class Load_animation extends React.Component {
    
    state = {
        start: false
    }

    onStartLoad = () => this.setState({start: !this.state.start})
    
    render () {
        return this.state.start ? <div className='loader loader-animated' onClick ={this.onStartLoad}></div>:<button onClick = {this.onStartLoad}>Load</button>
    }
}

export default Load_animation;