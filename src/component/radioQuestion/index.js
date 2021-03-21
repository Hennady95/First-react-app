import './style.css'
import { useState, useEffect } from 'react'

export const RadioForQuestion = (proops) => { 

    return (
        <div style = {{display: 'flex', alignItems: 'center'}}>
            <ul className= 'answers'>
            {proops.listAnswers.map((item,i) => 
                <li style = {{listStyleType: 'none'}}>
                    <input type='radio' name = {proops.name} value = {`${proops.questionIndex}/${proops.value[i]}`} onClick = {proops.click}/>
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
        console.log(score);
        if(good)
            alert('Test past')
        else 
            alert('Loser')
    }

    const addAnswer = (event) => {
        let findValue = event.target.value.split('/');
        score[Number(findValue[0])] = Number(findValue[1]);
    }

    useEffect(() => {
        setCountQuestions(props.list.length);
        for(let i = 0; i < countQuestions; i++)
            score.push(0)
    },[score, countQuestions])
    
    return (<>
        {props.list.map((item, index) => 
            <div className = 'question'>
            <p>{item.question}</p>
            <RadioForQuestion 
                value = {[...item.answersValue]}
                click = {addAnswer} 
                name = {item.question}
                listAnswers = {[...item.answers]}
                questionIndex = {index}
            />
        </div>
        )}
        <button className ='checkBtn' onClick = {showScore}>Check score</button>
    </>
    )
}