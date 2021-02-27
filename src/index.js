import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Userlist from './component/user_list.js'
import reportWebVitals from './reportWebVitals';
import Loadpanel from "./component/showList";
import Load_animation from './component/animation'
import Prop_animation from './component/prop-animation'
import State_modify from './component/state-modification'
import List from './component/array-modify'
import Play_pause from './component/play-pause'
import List_body from './component/show-list-prop'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Userlist />
    <Loadpanel />
    <Load_animation />
    <Prop_animation/>
    <Prop_animation start/>
    <State_modify />
    <List />
    <Play_pause />
    <List_body clName = 'left'/>
    <List_body clName = 'right'/>
    <List_body clName = 'top'/>
    <List_body clName = 'bottom'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
