const initialState = {
    number: 0,
}

export const reducer = (state = initialState, action) => {

    if(action.type === "PLUS") {
        return {
            number: state.number + 1
        }
    }

    if(action.type === "MINUS") {
        return {
            number: state.number - 1
        }
    }

    if(action.type === "RESET") {
        return {
            number: 0
        }
    }

    return state;
}