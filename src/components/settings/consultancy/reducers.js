import * as actionTypes from './constants' 

const initialState = {
    consultanciesData: {},
    addConsultanciesData: {},
    getConsulatancyById: {},
    editConsultancyById: {},
    deleteConsultancyById:{}
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_CONSULTANCIES_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_CONSULTANCIES_SUCCESS:
            // let tempArray =
            //     action.response.consultancies && action.response.consultancies.length ? action.response.consultancies.map(temp => { return JSON.parse(temp) }) : []
            return {
                ...state,
                // consultanciesData: { success: true, consultancies: tempArray, count: action.response.count }
                consultanciesData: { success: true, ...action.response }
            }
        case actionTypes.GET_CONSULTANCIES_FAILURE:
            return {
                ...state,
                consultanciesData: { success: false, ...action.error }
            }

        case actionTypes.ADD_CONSULTANCIES_REQUEST:
            return {
                ...state
            }
        case actionTypes.ADD_CONSULTANCIES_SUCCESS:
            return {
                ...state,
                addConsultanciesData: { success: true, ...action.response }
            }
        case actionTypes.ADD_CONSULTANCIES_FAILURE:
            return {
                ...state,
                addConsultanciesData: { success: false, ...action.error }
            }

        case actionTypes.GET_CONSULTANCIES_BYID_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_CONSULTANCIES_BYID_SUCCESS:

            return {

                ...state,
                getConsulatancyById: { success: true, ...action.response }
            }
        case actionTypes.GET_CONSULTANCIES_BYID_FAILURE:
            return {
                ...state,
                getConsulatancyById: { success: false, ...action.error }
            }

        case actionTypes.EDIT_CONSULTANCIES_BYID_REQUEST:
            return {
                ...state
            }
        case actionTypes.EDIT_CONSULTANCIES_BYID_SUCCESS:
            return {
                ...state,
                editConsultancyById: { success: true, ...action.response }
            }
        case actionTypes.EDIT_CONSULTANCIES_BYID_FAILURE:
            return {
                ...state,
                editConsultancyById: { success: false, ...action.error }
            }

            case actionTypes.DELETE_CONSULTANCIES_BYID_REQUEST:
            return {
                ...state
            }
        case actionTypes.DELETE_CONSULTANCIES_BYID_SUCCESS:
            return {
                ...state,
                deleteConsultancyById: { success: true, ...action.response }
            }
        case actionTypes.DELETE_CONSULTANCIES_BYID_FAILURE:
            return {
                ...state,
                deleteConsultancyById: { success: false, ...action.error }
            }

        default:
            return state;
    }
}