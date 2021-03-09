import React from 'react'

class Display extends React.Component {
    
    state = {
        start: false
    }

    onStartLoad = () => this.setState({start: !this.state.start})
    
    render () {
        return (
            <div>
                <div className= {`loader ${ this.state.start ? 'loader-animated' : ''}`} ></div> 
                <button onClick = {this.onStartLoad}>Load</button>
            </div>
        ) 
    }
}

export default Display;