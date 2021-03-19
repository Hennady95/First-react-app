import './App.css';
import CustomTextInput from './changedClasswork/src/components/CustomTextInput'
import { useState } from 'react'

function App() {

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

export default App;
