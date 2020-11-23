import * as actionTypes from './constants'

const initialState = {
    regionData: {},
    addRegionData:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_REGION_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_REGION_SUCCESS:
            return {
                ...state,
                regionData: { success: true, ...action.response }
            }
        case actionTypes.GET_REGION_FAILURE:
            return {
                ...state,
                regionData: { success: false, ...action.error }
            }

            case actionTypes.ADD_REGION_REQUEST:
            return {
                ...state
            }
        case actionTypes.ADD_REGION_SUCCESS:
            return {
                ...state,
                addRegionData: { success: true, ...action.response }
            }
        case actionTypes.ADD_REGION_FAILURE:
            return {
                ...state,
                addRegionData: { success: false, ...action.error }
            }
         
            default :
            return{
                ...state
            }
    }
}