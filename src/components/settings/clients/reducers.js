import * as actionTypes from './constants'

const initialState = {
    clientData: {},
    addClientData: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CLIENTS_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_CLIENTS_SUCCESS:
            return {
                ...state,
                clientData: { success: true, ...action.response }
            }
        case actionTypes.GET_CLIENTS_FAILURE:
            return {
                ...state,
                clientData: { success: false, ...action.error }
            }
        case actionTypes.ADD_CLIENTS_REQUEST:
            return {
                ...state
            }
        case actionTypes.ADD_CLIENTS_SUCCESS:
            return {
                ...state,
                addClientData: { success: true, ...action.response }
            }
        case actionTypes.ADD_CLIENTS_FAILURE:
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