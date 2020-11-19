import * as actionTypes from './constants'
import * as Service from './services'

const getClients = params => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_CLIENTS_REQUEST })
            const res = await Service.getClients(params)
            console.log('Clientres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GET_CLIENTS_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.GET_CLIENTS_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.GET_CLIENTS_FAILURE, error: res.response && res.response.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.GET_CLIENTS_FAILURE, error: e.response && e.response.data })
        }
    }
}

const addClients = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.ADD_CLIENTS_REQUEST })
            const res = await Service.addClients(params)
            console.log('res', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.ADD_CLIENTS_SUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.ADD_CLIENTS_FAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.ADD_CLIENTS_FAILURE, error: res.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.ADD_CLIENTS_FAILURE, error: e.response && e.response.data })
        }
    }
}

export default {
    getClients,
    addClients
}