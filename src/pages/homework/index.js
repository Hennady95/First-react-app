import {Question} from '../../component'
import './style.css'
import Data from '../../data.json'

export const Homework = () => {
   return <div className = 'questions-list'>
       <Question list = {Data}/>
   </div> 
}