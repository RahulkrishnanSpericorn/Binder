import * as actionTypes from './constants'
import { addConsultancies } from './services'

const initialState = {
    consultanciesData: {},
    addConsultanciesData: {},
    getConsulatancyById: {},
    editConsultancyById: {}
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GETCONSULTANCIESREQUEST:
            return {
                ...state
            }
        case actionTypes.GETCONSULTANCIESSUCCESS:
            let tempArray =
                action.response.consultancies && action.response.consultancies.length ? action.response.consultancies.map(temp => { return JSON.parse(temp) }) : []
            return {
                ...state,
                consultanciesData: { success: true, consultancies: tempArray, count: action.response.count }
            }
        case actionTypes.GETCONSULTANCIESFAILURE:
            return {
                ...state,
                consultanciesData: { success: false, ...action.error }
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

        case actionTypes.GETCONSULTANCIESBYIDREQUEST:
            return {
                ...state
            }
        case actionTypes.GETCONSULTANCIESBYIDSUCCESS:

            return {

                ...state,
                getConsulatancyById: { success: true, ...action.response }
            }
        case actionTypes.GETCONSULTANCIESBYIDFAILURE:
            return {
                ...state,
                getConsulatancyById: { success: false, ...action.error }
            }

        case actionTypes.EDITCONSULTANCIESBYIDREQUEST:
            return {
                ...state
            }
        case actionTypes.EDITCONSULTANCIESBYIDSUCCESS:
            return {
                ...state,
                editConsultancyById: { success: true, ...action.response }
            }
        case actionTypes.EDITCONSULTANCIESBYIDFAILURE:
            return {
                ...state,
                editConsultancyById: { success: false, ...action.error }
            }

        default:
            return state;
    }
}