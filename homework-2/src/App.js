import logo from './logo.svg';
import React from 'react';
import './index.css';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className = 'App'>
        <Square label ='Big squere' cssClass = 'square-big' />
        <Square label ='A less squere' cssClass = 'square-less' />
        <Square label ='The smallest one' cssClass = 'square-smollest' />
        <Textlorem />
      </div>
    )
  }
}

class Square extends React.Component {
  render () {
    return (
      <div className = {this.props.cssClass}>
        {this.props.label}
      </div>
    )
  }
}

class Textlorem extends React.Component {

  state = {
    italic : false
  } 

  changeStyle = () => this.state.italic ? this.setState({italic: false}) : this.setState({italic: true})

  render () {
    return (
      <p onClick = {this.changeStyle} className = {this.state.italic === true ? 'italic-text' : ''}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
      and scrambled it to make a type specimen book.</p>
    )
  }
}

export default App;
