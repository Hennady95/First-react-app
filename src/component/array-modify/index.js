import React from 'react'
import Data from './names.json'

class List extends React.Component {

    state = {
        people :['Sasha', 'Tanya', 'Petr']
    }

    oneMoreName = () => {
        const index = Math.floor(Math.random() * 13) - 1;
        const newList = [...this.state.people, Data[index]]
        this.setState({people: newList})
    }

    render () {
        return (
            <div>
                <ul>
                    {this.state.people.map(item => <li>{item}</li>)}
                </ul>
                <button onClick = {this.oneMoreName}>New user</button>
            </div>
        )
    }
}

export default List;