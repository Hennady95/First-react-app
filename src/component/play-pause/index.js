import React from 'react'

class Display extends React.Component {
    
    state = {
        start: false
    }

    onStartLoad = () => this.setState({start: !this.state.start})
    
    render () {
        const clName = this.state.start ? 'loader loader-animated' : 'loader'
        return (
            <div>
                <div className= {clName} ></div> 
                <button onClick = {this.onStartLoad}>Load</button>
            </div>
        ) 
    }
}

export default Display;