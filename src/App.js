import React from 'react'
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    isSignedIn : false
  }

  click = () => setTimeout( () => this.setState({isSignedIn: !this.state.isSignedIn}), 3000 )

  render () {
    return this.state.isSignedIn ? 
    <div>Hello user</div>
    :
    <button onClick = {this.click}>Sign in</button>
  } 
}

export default App;
