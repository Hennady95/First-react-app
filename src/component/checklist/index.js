import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types';
import '../checklist/style.css'


const Flag = (props) => {

    const [done,setDone] = useState(false);

    const onCangeFlag = (event) => {
        setDone(event.target.checked)
        if(event.target.checked) {
            props.checkFlag();
        } else {
            props.unCheck();
        }
    }

    return <>
        <input type = 'checkbox' onChange = {onCangeFlag}/>
        <input type = 'text' value = {props.text}/>
    </>
}

Flag.propTypes = {
    text: PropTypes.string,
    checkFlag: PropTypes.func,
    unCheck: PropTypes.func,
}

export const CheckList = (props) => {

    const [countTask, setCountTask] = useState(0);

    const plus = () => setCountTask(countTask + 1);

    const minus = () => setCountTask(countTask - 1);

    const newStep = countTask / props.list.length * 100;

    return (
        <div>
            <p>{props.title}</p>
            <div className = 'container'>
                <div className = 'loader'>
                    <div className = 'progress' style = {{width: `${newStep}%`}} />
                </div>
            </div>
            <div className ='list-body'>
                {props.list.map(item => <Flag key = {item.id} checkFlag = {plus} unCheck = {minus} text = {item.text}/>)}
            </div>
            <p>{`count = ${countTask}`}</p>
        </div>
    )
} 

CheckList.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
    }))
}