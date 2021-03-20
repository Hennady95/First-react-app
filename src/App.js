//import logo from './logo.svg';
import {Component} from 'react'
import './App.css';
import Loader from './components/conditional-render'
import Form from './components/login-form'

class App extends Component{
  
  render () {
    return <> 
      <Loader />
      <Form />
      </>
  } 
}

export default App;
