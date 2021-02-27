import React from 'react';
import data from '../data.json' 

const Usercomponent = (props) => {
    return (
        <div style = {{border: '2px solid black', padding: '10px', textAlign: 'center', margin: '5px', width: '300px' }}>
            <h3>{props.name}</h3>
            <h4>{props.surname}</h4>
        </div>
    )
}

class Userlist extends React.Component {
    render() {
        console.log(data);
        return <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> {data.map(item => <Usercomponent key={item._id} name = {item.name.first} surname = {item.name.last}/> ) } </div>
    }
}

export default Userlist