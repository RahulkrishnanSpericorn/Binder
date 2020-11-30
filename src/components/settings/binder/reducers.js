import * as actionTypes from './constants'

const initialState = {
    binderData: {},
    addBinderData: {},
    deleteBinderData:{},
    editBinderData:{}
}


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BINDER_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_BINDER_SUCCESS: 
            return {
                ...state,
                binderData: { success: true, ...action.response }
            }
        case actionTypes.GET_BINDER_FAILURE:
            return {
                ...state,
                binderData: { success: false, ...action.error }
            }

            case actionTypes.ADD_BINDER_REQUEST:
            return {
                ...state
            }
        case actionTypes.ADD_BINDER_SUCCESS:
            return {
                ...state,
                addBinderData: { success: true, ...action.response }
            }
        case actionTypes.ADD_BINDER_FAILURE:
            return {
                ...state,
                addBinderData: { success: false, ...action.error }
            }

            case actionTypes.DELETE_BINDER_REQUEST:
                return {
                    ...state
                }
            case actionTypes.DELETE_BINDER_SUCCESS:
                return {
                    ...state,
                    deleteBinderData: { success: true, ...action.response }
                }
            case actionTypes.DELETE_BINDER_FAILURE:
                return {
                    ...state,
                    deleteBinderData: { success: false, ...action.error }
                }

                case actionTypes.EDIT_BINDER_REQUEST:
                    return {
                        ...state
                    }
                case actionTypes.EDIT_BINDER_SUCCESS:
                    return {
                        ...state,
                        editBinderData: { success: true, ...action.response }
                    }
                case actionTypes.EDIT_BINDER_FAILURE:
                    return {
                        ...state,
                        editBinderData: { success: false, ...action.error }
                    }
 
         
            default :
            return{
                ...state
            }
    }
}