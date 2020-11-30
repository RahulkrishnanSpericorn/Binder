import * as actionTypes from './constants'

const initialState = {
    siteData: {},
    addSiteData:{},
    editSiteData:{},
    deleteSiteData:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SITES_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_SITES_SUCCESS:
            return {
                ...state,
                siteData: { success: true, ...action.response }
            }
        case actionTypes.GET_SITES_FAILURE:
            return {
                ...state,
                siteData: { success: false, ...action.error }
            }

            case actionTypes.ADD_SITES_REQUEST:
            return {
                ...state
            }
        case actionTypes.ADD_SITES_SUCCESS:
            return {
                ...state,
                addSiteData: { success: true, ...action.response }
            }
        case actionTypes.ADD_SITES_FAILURE:
            return {
                ...state,
                addSiteData: { success: false, ...action.error }
            }

            case actionTypes.EDIT_SITES_BYID_REQUEST:
                return {
                    ...state
                }
            case actionTypes.EDIT_SITES_BYID_SUCCESS:
                return {
                    ...state,
                    editSiteData: { success: true, ...action.response }
                }
            case actionTypes.EDIT_SITES_BYID_FAILURE:
                return {
                    ...state,
                    editSiteData: { success: false, ...action.error }
                }

                case actionTypes.DELETE_SITES_BYID_REQUEST:
                    return {
                        ...state
                    }
                case actionTypes.DELETE_SITES_BYID_SUCCESS:
                    return {
                        ...state,
                        deleteSiteData: { success: true, ...action.response }
                    }
                case actionTypes.DELETE_SITES_BYID_FAILURE:
                    return {
                        ...state,
                        deleteSiteData: { success: false, ...action.error }
                    }
         
            default :
            return{
                ...state
            }
    }
}