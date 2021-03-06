import {Component} from 'react'
import '../login-form/style.css'

class Form extends Component {

    state = {
        login: '',
        password: ''
    }

    onChangeLogin = (event) => this.setState({login: event.target.value})

    onChangePassword = (event) => this.setState({password: event.target.value})

    changeInputValue = (event) => event.target.id === 'login' ?  this.setState({login: event.target.value}) : this.setState({password: event.target.value})

    clearData = () => this.setState({login: '', password: ''})

    render() {
        return <div className = "form">
            <p className = "field-title">Login</p>
            <input type = "text" onChange = {this.changeInputValue} value = {this.state.login} id='login'/>
            <p className = "field-title">Password</p>
            <input type = "text" onChange = {this.changeInputValue} value = {this.state.password} id='password'/>
            <button className = "clearBtn" onClick = {this.clearData}>Clear data</button>
        </div>
    }
}

export default Form;