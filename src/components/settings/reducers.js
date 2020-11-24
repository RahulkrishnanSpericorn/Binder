import * as actionTypes from './constants'

const initialState = {
    consultancyDropdownData: {}, 
    clientDropdownData: {}, 
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONSULTANCY_DROPDOWN_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_CONSULTANCY_DROPDOWN_SUCCESS:
            return {
                ...state,
                consultancyDropdownData: { success: true, ...action.response }
            }
        case actionTypes.GET_CONSULTANCY_DROPDOWN_FAILURE:
            return {
                ...state,
                consultancyDropdownData: { success: false, ...action.error }
            }
            
            case actionTypes.GET_CLIENTS_DROPDOWN_REQUEST:
                return {
                    ...state
                }
            case actionTypes.GET_CLIENTS_DROPDOWN_SUCCESS:
                return {
                    ...state,
                    clientDropdownData: { success: true, ...action.response }
                }
            case actionTypes.GET_CLIENTS_DROPDOWN_FAILURE:
                return {
                    ...state,
                    clientDropdownData: { success: false, ...action.error }
                }

            
         
            default :
            return{
                ...state
            }
    }
}