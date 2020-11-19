import * as actionTypes from './constants'

const initialState = {
    clientData: {},
    addClientData: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETCLIENTSREQUEST:
            return {
                ...state
            }
        case actionTypes.GETCLIENTSSUCCESS:
            return {
                ...state,
                clientData: { success: true, ...action.response }
            }
        case actionTypes.GETCLIENTSFAILURE:
            return {
                ...state,
                clientData: { success: false, ...action.error }
            }
        case actionTypes.ADDCLIENTSREQUEST:
            return {
                ...state
            }
        case actionTypes.ADDCLIENTSSUCCESS:
            return {
                ...state,
                addClientData: { success: true, ...action.response }
            }
        case actionTypes.ADDCLIENTSFAILURE:
            return {
                ...state,
                addClientData: { success: false, ...action.error }
            }
            default :
            return{
                ...state
            }
    }
}