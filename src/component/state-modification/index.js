import React from 'react'

class Button extends React.Component {
    render () {
        return <button onClick = {this.props.func}>{this.props.label}</button>
    }
}

class ModifyState extends React.Component {

    state = {
        number: 0
    }

    plus =()=> this.setState({number: this.state.number + 1})
    minus =()=> this.setState( this.state.number > 0 ? {number: this.state.number - 1} : {number: 0})

    render () {
        return <>
        <Button label ='-' func = {this.minus}></Button>
            {this.state.number}
        <Button label ='+' func = {this.plus}></Button>
        </>
    }
}

export default ModifyState;