import React from 'react'

const menuItem = ['Лук', 'Морковь','Укроп', 'Капуста', 'adsdsa']



class Count_ingridients extends React.Component {
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

class Loadpanel extends React.Component{
    state = {
        showList: false,
        finalCount: 0
    }

    onShowItem = () => this.setState({showList: !this.state.showList});

    plusCount = (number) =>  this.setState({finalCount: this.state.finalCount + number})

    render () {
       return  this.state.showList ? (
        <div > 
        <span>Закрыть <span onClick = {this.onShowItem}>^</span></span>
            <ul>
                {menuItem.map( item => <li><span>{item} <Count_ingridients sum={this.plusCount} /></span></li>)}
            </ul>
            <div>{this.state.finalCount}</div>
        </div>
       )
       :
       <div>Ингридиенты <span onClick = {this.onShowItem}>V</span></div>
    }
}

export default Loadpanel;