import '../../App.css';
import { CheckList } from '../../component'


const todoItems = [
  {
      id:0,
      text: 'asdsdasdd'
  },
  {
      id:1,
      text: 'asdsdasdd1'
  },
  {
      id:2,
      text: 'asdsdasdd2'
  },
  {
      id:3,
      text: 'asdsdasdd3'
  },
  {
      id:4,
      text: 'asdsdasdd4'
  },
  {
      id:5,
      text: 'asdsdasdd5'
  },
  {
      id:6,
      text: 'asdsdasdd4'
  },
  {
      id:7,
      text: 'asdsdasdd5'
  },
]

const todoItems2 = [
  {
      id:0,
      text: 'asdsdasdd'
  },
  {
      id:1,
      text: 'asdsdasdd1'
  },
  {
      id:2,
      text: 'asdsdasdd2'
  },
  {
      id:3,
      text: 'asdsdasdd3'
  },
  {
      id:4,
      text: 'asdsdasdd4'
  },
  {
      id:5,
      text: 'asdsdasdd5'
  },
]

const Classwork = () => {
  return (
    <div className="App">
      <CheckList title = 'First list' list = {todoItems}/>
      <CheckList title = 'Secon list' list = {todoItems2}/>
    </div>
  );
}

export  { Classwork };
