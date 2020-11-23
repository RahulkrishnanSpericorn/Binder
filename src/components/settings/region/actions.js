import * as actionTypes from './constants'
import * as Service from './services'

const getRegion = params => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_REGION_REQUEST })
            const res = await Service.getRegion(params)
            console.log('Regionres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_REGION_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.GET_REGION_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.GET_REGION_FAILURE, error: res.response && res.response.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_REGION_FAILURE, error: e.response && e.response.data })
        }
    }
}
const addRegion = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_REGION_REQUEST })
            const res = await Service.addRegion(params)
            console.log('res', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_REGION_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.ADD_REGION_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.ADD_REGION_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_REGION_FAILURE, error: e.response && e.response.data })
        }
    }
}

export default {
    getRegion,
    addRegion
}