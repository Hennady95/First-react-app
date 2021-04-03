import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'

import { createStore } from 'redux'// для создания общего стейта
import { reducer } from './reducer.js'//файл логики работы коунтера
import { Provider, useSelector, useDispatch } from 'react-redux'//обязательные вещи в самом начале

//украшения для задания
import { Switch, FormControlLabel, Button } from '@material-ui/core';

const actionPlus = {
  type: "PLUS"
}

const actionMinus = {
  type: "MINUS"
}

const actionReset = {
  type: "RESET"
}

const actionTenUm = {
  type: "UM10" 
}

const actionChangeTheme = {
  type: "CHANGE_THEME"
}

const App = () => {

  const dispatch = useDispatch();//вызов логики действия из файла reducer.js (точнее диспетчера событий)

  const number = useSelector((state) => state.number);//данные из стора получаем useSelector

  const theme = useSelector((state) => state.checkValue);

  const buttonTheme = useSelector((state) => state.theme);

  const onChangeTheme = useCallback((event) => {
      const switchTheme ={
        type: "SWITCH_THEME_ACTION",
        payload: event.target.checked//для передачи данных вместе с действием
      }
      dispatch(switchTheme)
  }, [dispatch])

  const onChooseLightTheme = useCallback((event) => {
    const themeAction = {
      type: "SWITCH_THEME",
      payload: event.target.id
    }

    dispatch(themeAction)
  },[dispatch]);

  return (
    <div >
      <div className = {`App ${buttonTheme}`}>
        <button onClick = {() => dispatch(actionPlus)}>+</button>
        <p>{number}</p>
        <button onClick = {() => dispatch(actionMinus)}>-</button>
        <button onClick = {() => dispatch(actionReset)}>reset</button>
        <button onClick = {() => dispatch(actionTenUm)}>X10</button>
      </div>
      <div className = {`App ${theme ? "darkTheme" : "lightTheme"}  `}>
        <p>задание с переключением темы компонента</p>
        <FormControlLabel
          control={<Switch size="small" color = "primary" onChange = {()=> dispatch(actionChangeTheme)}/>}
          label="dark theme"
        />
        <FormControlLabel
          control={<Switch size="small" color = "primary" onChange = {onChangeTheme}/>}
          label="dark theme"
        />
        <button onClick = {onChooseLightTheme} id = 'light' color="primary"> Light</button>
        <button onClick = {onChooseLightTheme} id = 'dark'> Dark</button>
        <button onClick = {onChooseLightTheme} id = 'orange'> Orange</button>
      </div>
    </div>
  )

}

const store = createStore(reducer); //создание стейта  и передача функции работающей/изменяющей с ним в качестве параметра

//Provider для передачи созданного стейта(store) для компонентов внутри него

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);