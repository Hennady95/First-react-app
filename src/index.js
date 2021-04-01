import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux'
import { reducer } from './reducer.js'
import { Provider, useSelector, useDispatch } from 'react-redux'

const actionPlus = {
  type: "PLUS"
}

const actionMinus = {
  type: "MINUS"
}

const actionReset = {
  type: "RESET"
}

const App = () => {

  const dispatch = useDispatch();

  const number = useSelector((state) => state.number);

  return (
    <div className = "App">
      <button onClick = {() => dispatch(actionPlus)}>+</button>
      <p>{number}</p>
      <button onClick = {() => dispatch(actionMinus)}>-</button>
      <button onClick = {() => dispatch(actionReset)}>reset</button>
    </div>
  )

}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);