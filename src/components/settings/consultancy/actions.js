import * as actionTypes from './constants'
import * as Service from './services'

const getConsultancies = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_CONSULTANCIES_REQUEST })
            const res = await Service.getConsultancies(params)
            console.log('resgetcon', res)
            if (res && res.status === 200) {
                const getConsultancyData = res.data;
                if (getConsultancyData) {
                    dispatch({ type: actionTypes.GET_CONSULTANCIES_SUCCESS, response: getConsultancyData })
                } else {
                    dispatch({ type: actionTypes.GET_CONSULTANCIES_FAILURE, error: getConsultancyData })
                }
            } else {
                dispatch({ type: actionTypes.GET_CONSULTANCIES_FAILURE, error: res.response && res.response.data })
            }

        } catch (e) {
            dispatch({ type: actionTypes.GET_CONSULTANCIES_FAILURE, error: e.response && e.response.data })
        }
    }
}

const addConsultancies = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_CONSULTANCIES_REQUEST })
            const res = await Service.addConsultancies(params)
            console.log('res', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_CONSULTANCIES_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.ADD_CONSULTANCIES_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.ADD_CONSULTANCIES_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_CONSULTANCIES_FAILURE, error: e.response && e.response.data })
        }
    }
}

const getConsultanciesById = id => {

    return async dispatch => {

        try {
            dispatch({ type: actionTypes.GET_CONSULTANCIES_BYID_REQUEST })
            const res = await Service.getConsultanciesById(id)
            console.log('resbyId', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_CONSULTANCIES_BYID_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.GET_CONSULTANCIES_BYID_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.GET_CONSULTANCIES_BYID_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_CONSULTANCIES_BYID_FAILURE, error: e.response && e.response.data })
        }
    }
}

const editConsultanciesById = (params, id) => {

    return async dispatch => {

        try {
            dispatch({ type: actionTypes.EDIT_CONSULTANCIES_BYID_REQUEST })
            const res = await Service.editConsultanciesById(params, id)
            console.log('resUpdate', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.EDIT_CONSULTANCIES_BYID_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.EDIT_CONSULTANCIES_BYID_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.EDIT_CONSULTANCIES_BYID_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.EDIT_CONSULTANCIES_BYID_FAILURE, error: e.response && e.response.data })
        }
    }
}



export default {
    getConsultancies,
    addConsultancies,
    getConsultanciesById,
    editConsultanciesById
}