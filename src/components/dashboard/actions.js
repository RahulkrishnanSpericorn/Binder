import * as actionTypes from './constants'
import * as Service from './services'

const getConsultancies = params => {

    return async dispatch => {
        try {
            dispatch({ type: actionTypes.GET_CONSULTANCIES_REQUEST })
            const res = await Service.getConsultancies(params)
            console.log('res', res)

        } catch (e) {

        }
    }
}

export default {
    getConsultancies
}