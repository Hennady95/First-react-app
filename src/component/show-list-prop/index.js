import React from 'react'
import './style.css'

const menuItem = ['Лук', 'Морковь','Укроп', 'Капуста', 'adsdsa']

class CountIngridients extends React.Component {
    state = {
        count: 0
    }

    onAddCount = () => {
        this.setState({count: this.state.count + 1})
        this.props.sum(1) 
    }
    onDeleteCount = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1}) 
            this.props.sum(-1)
        }
        else
            this.setState({count: 0})
    }

    render () {
        return (<span>
            <button onClick={this.onDeleteCount}>-</button>
            <span>{this.state.count}</span>
            <button onClick ={this.onAddCount}>+</button>
        </span>)
    }
}

class ListBody extends React.Component{
    
    state = {
        showList: false,
        finalCount: 0
    }

    onShowItem = () => this.setState({showList: !this.state.showList});

    plusCount = (number) =>  this.setState({finalCount: this.state.finalCount + number})

    render () {
       return  this.state.showList ? (
        <div className ={this.props.clName}> 
        <button onClick = {this.onShowItem}>Закрыть ^</button>
            <ul>
                {menuItem.map( item => <li><span>{item} <CountIngridients sum={this.plusCount} /></span></li>)}
            </ul>
            <div>{this.state.finalCount}</div>
        </div>
       )
       :
       <button onClick = {this.onShowItem} style = {{width: '300px'}}>Ингридиенты V</button>
    }
}

export default ListBody;