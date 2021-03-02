import React from 'react'
import "./style.css";

class Load_animation extends React.Component {
    
    state = {
        start: false
    }

    onStartLoad = () => this.setState({start: !this.state.start})
    
    render () {
        return <div onClick = {this.onStartLoad}>{this.state.start ? <div className='loader loader-animated'></div>:<button>Load</button>}</div>
    }
}

export default Load_animation;