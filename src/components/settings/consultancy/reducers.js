import * as actionTypes from './constants'
import { addConsultancies } from './services'

const initialState = {
    ConsultanciesData: {},
    addConsultanciesData: {}
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GETCONSULTANCIESREQUEST:
            return {
                ...state
            }
        case actionTypes.GETCONSULTANCIESSUCCESS:
            return {
                ...state,
                ConsultanciesData: { success: true, ...action.response }
            }
        case actionTypes.GETCONSULTANCIESFAILURE:
            return {
                ...state,
                ConsultanciesData: { success: false, ...action.error }
            }

        case actionTypes.ADDCONSULTANCIESREQUEST:
            return {
                ...state
            }
        case actionTypes.ADDCONSULTANCIESSUCCESS:
            return {
                ...state,
                addConsultanciesData: { success: true, ...action.response }
            }
        case actionTypes.ADDCONSULTANCIESFAILURE:
            return {
                ...state,
                addConsultanciesData: { success: false, ...action.error }
            }

        default:
            return state;
    }
}