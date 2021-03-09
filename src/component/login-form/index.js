import {Component} from 'react'
import '../login-form/style.css'

let inputNames = [
    {
        id: 0,
        text: 'First name',
        stateField : 'fisrtName'
    },
    {
        id: 1,
        text: 'Last name',
        stateField : 'lastName'
    },
    {
        id: 2,
        text: 'email',
        stateField : 'email'
    },
    {
        id: 3,
        text: 'Nickname',
        stateField : 'nickname'
    },
    {
        id: 4,
        text: 'Test',
        stateField: 'test'
    }
]

const keyState = {}
inputNames.map(item => keyState[item.stateField] = '')
console.log(keyState);
 
class Form extends Component {

    state = Object.assign({},keyState)

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
                <div key={index}>
                    <p className = "field-title">{item.text}</p>
                    <input type = "text" onChange = {this.changeInputValue} value = {this.state.login} id={item.stateField}/>
               </div>
            )}
            <button className = "clearBtn" onClick = {this.clearData}>Clear data</button>
        </div>
    }
}

export default Form;