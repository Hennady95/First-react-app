import React from 'react'
import PropTypes from 'prop-types'

class CustomTextInput extends React.Component {

    render() {
        let styleInput = {}
        if(this.props.resetStyle)
            styleInput = {border: 'none', backgroundColor: 'white'}
        return <div>
            <span>{this.props.inputName}</span>
            <input 
                onChange = {this.props.onChange} 
                type = {this.props.type ? 'text' : 'password'} 
                style = {{padding: `${this.props.padding}rem`, ...styleInput}}
                placeholder = {this.props.placeholder}
                value ={this.props.value}/>
        </div>
    }
}

CustomTextInput.propTypes = {
    padding: PropTypes.number,
    inputName: PropTypes.string,
    type: PropTypes.bool,
    resetStyle: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value:PropTypes.string.isRequired,
}

CustomTextInput.defaultProps = {
    padding: 1,
    inputName: '',
    type: false,
    resetStyle: false,
    placeholder: 'Tut placeholder'
}

export default CustomTextInput;