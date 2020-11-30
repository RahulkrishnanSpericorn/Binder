import * as actionTypes from './constants'
import * as Service from './services'

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

export default {
    addBinder
}