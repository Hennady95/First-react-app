import React from 'react'

class LoginForm extends React.Component {

    state = {
        phone: '',
        fullName: '',
        password:'',
        confirmPass: '',
        error: ''
    }

    sendData =  async () => {
        const response = await fetch('тут мог быть ваш сервер',
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(this.state)
        })
        if(response.ok) {
            console.log('Succcess');
        } else {
            console.log(response.status);
        }
    }

    changePhone = (event) => this.setState({phone: event.target.value}) 

    changeName = (event) => this.setState({fullName: event.target.value})

    changePass = (event) => this.setState({password: event.target.value})

    changeConfirmPass = (event) => this.setState({confirmPass: event.target.value})

    checkData = () => {
        
        const correctPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/g.test(this.state.password);

        if(this.state.password.length < 8) {
            this.setState({error: 'Short password'})
        } else if(this.state.password !== this.state.confirmPass) {
            this.setState({error: 'Not the same value in password fields'})
        } else if (!correctPass) {
            this.setState({error: 'Password need combinate numbers with big and small letters'})
        } else if(this.state.phone.length !== 13 || this.state.phone[0] !== '+') {
            this.setState({error: 'Wrong phone number, first symbol must be + and contain 12 numbers'})
        } else if(!this.state.fullName.length) {
            this.setState({error: 'Enter name'})
        } else {
            this.sendData();
            this.setState({phone: '', fullName: '', password: '', confirmPass: '', error: ''})
        }
    }

    render () {
        return <div className = 'App'>
            <p>Phone</p>
            <input onChange = {this.changePhone} value = {this.state.phone} placeholder = 'Enter phone number'/>
            <p>First name and Last name</p>
            <input onChange = {this.changeName} value = {this.state.fullName} placeholder = 'Enter first name and Last name'/>
            <p>Password</p>
            <input onChange = {this.changePass} value = {this.state.password} placeholder = 'Enter passwoed'/>
            <p>Confirm password</p>
            <input onChange = {this.changeConfirmPass} value = {this.state.confirmPass} placeholder = 'Confirm password'/>
            <button onClick = {this.checkData}>Sing up</button>
            <p>{this.state.error}</p>
        </div>
    }
}

export default LoginForm