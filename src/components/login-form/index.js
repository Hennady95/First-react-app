import {Component} from 'react'
import '../login-form/style.css'

let inputNames = [
    {
        text: 'First name',
        stateField : 'fisrtName'
    },
    {
        text: 'Last name',
        stateField : 'lastName'
    },
    {
        text: 'email',
        stateField : 'email'
    },
    {
        text: 'Nickname',
        stateField : 'nickname'
    }
]

class Form extends Component {

    state = {

    }

    onChangeLogin = (event) => this.setState({login: event.target.value})

    onChangePassword = (event) => this.setState({password: event.target.value})

    /*event.target.id === 'login' ?  this.setState({login: event.target.value}) : this.setState({password: event.target.value})*/
    
    changeInputValue = (event) =>  this.setState({[event.target.id]: event.target.value})

    clearData = () => this.setState({login: '', password: ''})

    render() {
        return <div className = "form">
            {/*<p className = "field-title">Login</p>
            <input type = "text" onChange = {this.changeInputValue} value = {this.state.login} id='login'/>
            <p className = "field-title">Password</p>
    <input type = "text" onChange = {this.changeInputValue} value = {this.state.password} id='password'/>*/}
            {inputNames.map((item,index) => 
                <div>
                    <p className = "field-title">{item.text}</p>
                    <input type = "text" onChange = {this.changeInputValue} value = {this.state.login} id={item.stateField}/>
               </div>
            )}
            <button className = "clearBtn" onClick = {this.clearData}>Clear data</button>
        </div>
    }
}

export default Form;