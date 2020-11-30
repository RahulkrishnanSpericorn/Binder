import * as actionTypes from './constants'
import * as Service from './services'

const getBinder = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_BINDER_REQUEST })
            const res = await Service.getBinder(params)
            console.log('getBinderres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_BINDER_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.GET_BINDER_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.GET_BINDER_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_BINDER_FAILURE, error: e.response && e.response.data })
        }
    }
}

const addBinder = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_BINDER_REQUEST })
            const res = await Service.addBinder(params)
            console.log('addBinderres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_BINDER_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.ADD_BINDER_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.ADD_BINDER_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_BINDER_FAILURE, error: e.response && e.response.data })
        }
    }
}

const deleteBinder = id => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.DELETE_BINDER_REQUEST })
            const res = await Service.deleteBinder(id)
            console.log('deleteBinderres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.DELETE_BINDER_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.DELETE_BINDER_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.DELETE_BINDER_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.DELETE_BINDER_FAILURE, error: e.response && e.response.data })
        }
    }
}

const editBinder = (params, id) => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.EDIT_BINDER_REQUEST })
            const res = await Service.editBinder(params,id)
            console.log('updateBinderres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.EDIT_BINDER_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.EDIT_BINDER_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.EDIT_BINDER_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.EDIT_BINDER_FAILURE, error: e.response && e.response.data })
        }
    }
}

export default {
    getBinder,
    addBinder,
    deleteBinder,
    editBinder
}