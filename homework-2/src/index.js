import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Textcomp = (props) => {
  let under = '';
  if(props.underline) {
    under = 'underline'
  } else {
    under = 'none'
  }
  return <span style = {{fontSize: props.size, color: props.color, textDecoration: under}}>sdfkgkjdskjfhdgfdgdgdgsddskgk</span>
}
  
class Textcomp2 extends React.Component {
  
  state = {
    value: 'X'
  }
    
  change = () => this.state.value === 'X' ? this.setState({value: 'V'}) : this.setState({value: 'X'})
    
  render () {
    return <div onClick = {this.change} style ={{fontSize: '25px', textAlign: 'center'}}>{this.state.value}</div>
  }
}
    
class Textcomp3 extends React.Component {
    
  state = {
    ind: 0,
    obj: [11,22,33]
  }
  
  changeValue = () => this.state.ind < this.state.obj.length - 1 ? this.setState({ind: this.state.ind + 1}) : this.setState({ind: 0})
    
  render () {
    return <div onClick = {this.changeValue} style = {{fontSize: '25px', textAlign: 'center'}}>{this.state.obj[this.state.ind]}</div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Textcomp size = '25px' color = 'red' underline />
    <Textcomp2 />
    <Textcomp3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
