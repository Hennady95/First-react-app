import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Userlist from './component/user_list.js'
import reportWebVitals from './reportWebVitals';
import Loadpanel from "./component/showList";
import LoadAnimation from './component/animation'
import PropAnimation from './component/prop-animation'
import StateModify from './component/state-modification'
import List from './component/array-modify'
import PlayMause from './component/play-pause'
import ListBody from './component/show-list-prop'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Userlist />
    <Loadpanel />
    <LoadAnimation />
    <PropAnimation/>
    <PropAnimation start/>
    <StateModify />
    <List />
    <PlayPause />
    <ListBody direction  = 'left'/>
    <ListBody direction  = 'right'/>
    <ListBody direction  = 'top'/>
    <ListBody direction  = 'bottom'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
