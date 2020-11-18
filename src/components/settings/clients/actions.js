import * as actionTypes from './constants'
import * as Service from './services'

const getClients = params => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GETCLIENTSREQUEST })
            const res = await Service.getClients(params)
            console.log('Clientres', res)
            if (res && res.status === 200) {
                if (res.data) {
                    dispatch({ type: actionTypes.GETCLIENTSSUCCESS, response: res.data })
                } else {
                    dispatch({ type: actionTypes.GETCLIENTSFAILURE, error: res.data })
                }
            } else {
                dispatch({ type: actionTypes.GETCLIENTSFAILURE, error: res.response && res.response.data })
            }
        } catch (e) {
            dispatch({ type: actionTypes.GETCLIENTSFAILURE, error: e.response && e.response.data })
        }
    }
}

export default {
    getClients
}