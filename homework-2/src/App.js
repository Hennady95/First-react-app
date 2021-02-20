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

export default App;
