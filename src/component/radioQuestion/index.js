import './style.css'
import { useState, useEffect } from 'react'

export const RadioForQuestion = ({listAnswers,name,questionIndex,value, click }) => { 

    return (
        <div style = {{display: 'flex', alignItems: 'center'}}>
            <ul className= 'answers'>
            {listAnswers.map((item,i) => 
                <li key = {`answer${questionIndex}/${i}`} style = {{listStyleType: 'none'}}>
                    <input type='radio' name = {name} value = {`${questionIndex}/${value[i]}`} onClick = {click}/>
                    <span>{item}</span>
                </li>
            )}
            </ul>
        </div>
    )
}

export const Question = (props) => {

    const [score, setScore] = useState([]);
    const [countQuestions, setCountQuestions] = useState(0);

    const showScore = () => {
        let good = false;
        for(let i = 0; i < score.length; i++) {
            if(score[i] !== 1) {
                good = false;
                break
            }
            else 
               good = true;
        }
        if(good)
            alert('Test past')
        else 
            alert('Loser')
    }

    const addAnswer = (event) => {
        let findValue = event.target.value.split('/');
        let newArr = score;
        newArr[Number(findValue[0])] = Number(findValue[1]);
        setScore(newArr);
    }

    useEffect(() => {
        setCountQuestions(props.list.length);
        for(let i = 0; i < countQuestions; i++)
            score.push(0)
    },[score, countQuestions])
    
    return (<>
        {props.list.map((item, index) => 
            <div className = 'question' key = {`question${index}`}>
                <p>{item.question}</p>
                <RadioForQuestion 
                    value = {item.answersValue}
                    click = {addAnswer} 
                    name = {item.question}
                    listAnswers = {item.answers}
                    questionIndex = {index}
                />
            </div>
        )}
        <button className ='checkBtn' onClick = {showScore}>Check score</button>
    </>
    )
}