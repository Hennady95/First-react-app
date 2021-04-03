const initialState = {//начальный стейт
    number: 0,
    checkValue: false,
    theme: 'dark'
}

export const reducer = (state = initialState, action) => {
    if(action.type === "PLUS") {
        return {
            ...state,
            number: state.number + 1
        }
    }

    if(action.type === "MINUS") {
        return {
            ...state,
            number: state.number - 1
        }
    }

    if(action.type === "RESET") {
        return {
            ...state,
            number: 0
        }
    }

    if(action.type === "UM10") {
        return {
            ...state,
            number: state.number * 10
        }
    }

    if(action.type === "CHANGE_THEME") {
        return {
            ...state,
            checkValue: !state.checkValue
        }
    }

    if(action.type === "SWITCH_THEME_ACTION") {
        return {
            ...state,
            checkValue: action.payload
        }
    }

    if(action.type === "SWITCH_THEME") {
        return {
            ...state,
            theme: action.payload
        }
    }

    return state;
}