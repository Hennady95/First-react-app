import React, {Component} from 'react'
import '../conditional-render/style.css'

class Loader extends Component {
    
    state = {
        loading: false,
        greeting: ''
    }

    click = () => {
        setTimeout(this.sayhi,3000)
        this.setState({loading: true, greeting: ''})
    }

    sayhi = () => this.setState({loading: false, greeting: 'Hello'})

    render() 
    {
        return <div className = 'loader-body'>
            <button className = 'start-loader' onClick = {this.click}>Say HI</button>
            <div>
                {this.state.loading && <div className = 'loader-condition'></div> }
               <span className = 'hello-message'>{this.state.greeting}</span>
            </div>
        </div>
    }
}

export default Loader;