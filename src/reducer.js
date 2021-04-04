const initioalState = {
    profileState: {
        profData: '',
        seconds: 0,
    },
    signInState : {
        phone: '',
        password: '',
        user: null,
        error: '',
    },
    usersState: {
        usersList: [],
    }
}

export const reducer = (state = initioalState, action) => {

    console.log(state);
    console.log(action);
    if(action.type === "CHANGE_PHONE") {
        return {
            ...state,
            signInState: {
                ...state.signInState,
                phone: action.payload
            }
        }
    }

    if(action.type === "CHANGE_PASSWORD") {
        return {
            ...state,
            signInState: {
                ...state.signInState,
                password: action.payload
            }
        }
    }
    if(action.type === "ADD_USER") {
        return {
            ...state,
            signInState: {
                ...state.signInState,
                user: action.payload
            }
        }
    }

    if(action.type === "ADD_ERROR") {
        return {
            ...state,
            signInState: {
                ...state.signInState,
                error: action.payload
            }
        }
    }

    if(action.type === "CHANGE_PROFILE") {
        return {
            ...state,
            profileState: {
                ...state.profileState,
                profData: action.payload
            }
        }
    }

    if(action.type === "CHANGE_TIME") {
        return {
            ...state,
            profileState: {
                ...state.profileState,
                seconds: state.profileState.seconds + 1
            }
        }
    }

    if(action.type === "GET_USERS") {
        return {
            ...state,
            usersState: {
                ...state.usersState,
                usersList: action.payload
            }
        }
    }
    
    return state
} 