import { CustomTextInput } from '../../components'
import React,{ useState } from 'react'

function App1() {

  const [text,setText] = useState('');

  const hello = (text) => setText(text)

  return (
    <div className="App">
      <CustomTextInput 
        //padding = {3}
        inputName = 'qweqwe'
        //resetStyle
        //type
        onChange = {event => hello(event.target.value)}
        value = {text}
        //placeholder = 'aga'
      />
    </div>
  );
}

export  { App1 };
