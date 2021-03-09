import React from 'react';
import data from '../data.json' 
import '../App.css'

const Usercomponent = (props) => {
    return (
        <div className = 'list-component'>
            <h3>{props.name}</h3>
            <h4>{props.surname}</h4>
        </div>
    )
}

class Userlist extends React.Component {
    render() {
        console.log(data);
        return <div className = 'User-list-body '> {data.map(item => <Usercomponent key={item._id} name = {item.name.first} surname = {item.name.last}/> ) } </div>
    }
}

export default Userlist