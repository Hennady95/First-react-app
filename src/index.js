import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Navigator from './navigation';

import {Provider} from 'react-redux'
import logger from 'redux-logger'
import { createStore , applyMiddleware} from 'redux';
import { reducer } from './reducer' 

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {createStore(reducer,applyMiddleware(logger))}>
      <Navigator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

