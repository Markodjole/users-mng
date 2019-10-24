import * as actionTypes from '../actions/actionTypes';

const initialState = {
    modal: false,
    users: null,
    user: null
}

const modalClose = (state, action) => {
    return {
        ...state,
        modal: false,
        user: action.user
    }
}
const modalOpen = (state, action) => {
    return {
        ...state,
        modal: true,
    }
}
const setUser = (state, action) => {
    return {
        ...state,
        user: action.user
    }
}
const setAllUsers = (state, action) => {
    return {
        ...state,
        users: action.users
    }
}



const reducer = (state=initialState, action) => {
    
    switch(action.type){

        case actionTypes.CLOSE_MODAL :
        return modalClose(state, action)
   
        case actionTypes.OPEN_MODAL :
        return modalOpen(state, action)
        
        case actionTypes.SET_USER :
        return setUser(state, action)
        
        case actionTypes.SET_ALL_USERS :
        return setAllUsers(state, action)
   
        default :
        return state
    }
}
export default reducer;