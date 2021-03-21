import {Question} from '../../component'
import './style.css'
import Data from '../../data.json'

const QUESTIONS = [...Data]


export const Homework = () => {
   return <div className = 'questions-list'>
       <Question list = {[...QUESTIONS]}/>
   </div> 
}