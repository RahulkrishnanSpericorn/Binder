import * as actionTypes from './constants'
import * as Service from './services'

const getActivityList = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_ACTIVITY_LIST_REQUEST })
            const res = await Service.getActivityList(params)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_ACTIVITY_LIST_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.GET_ACTIVITY_LIST_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.GET_ACTIVITY_LIST_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_ACTIVITY_LIST_FAILURE, error: e.response && e.response.data })
        }
    }
}

const addActivity = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_ACTIVITY_REQUEST })
            const res = await Service.addActivity(params)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_ACTIVITY_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.ADD_ACTIVITY_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.ADD_ACTIVITY_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_ACTIVITY_FAILURE, error: e.response && e.response.data })
        }
    }
}

const deleteActivity = id => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.DELETE_ACTIVITY_REQUEST })
            const res = await Service.deleteActivity(id)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.DELETE_ACTIVITY_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.DELETE_ACTIVITY_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.DELETE_ACTIVITY_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.DELETE_ACTIVITY_FAILURE, error: e.response && e.response.data })
        }
    }
}

const editActivity = (params, id) => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.EDIT_ACTIVITY_REQUEST })
            const res = await Service.editActivity(params,id)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.EDIT_ACTIVITY_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.EDIT_ACTIVITY_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.EDIT_ACTIVITY_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.EDIT_ACTIVITY_FAILURE, error: e.response && e.response.data })
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getActivityList,
    addActivity,
    deleteActivity,
    editActivity
}