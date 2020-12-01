import { initial } from 'lodash';
import * as actionTypes from './constants'

const initialState ={
    buildingData:{},
    addBuildingData:{},
    editBuildingData:{},
    deleteBuildingData:{}
}

export default  (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.GET_BUILDING_REQUEST:
            return {
                ...state
            }
        case actionTypes.GET_BUILDING_SUCCESS:
            return {
                ...state,
                buildingData: { success: true, ...action.response }
            }
        case actionTypes.GET_BUILDING_FAILURE:
            return {
                ...state,
                buildingData: { success: false, ...action.error }
            }

            case actionTypes.ADD_BUILDING_REQUEST:
            return {
                ...state
            }
        case actionTypes.ADD_BUILDING_SUCCESS:
            return {
                ...state,
                addBuildingData: { success: true, ...action.response }
            }
        case actionTypes.ADD_BUILDING_FAILURE:
            return {
                ...state,
                addBuildingData: { success: false, ...action.error }
            }

            case actionTypes.EDIT_BUILDING_REQUEST:
                return {
                    ...state
                }
            case actionTypes.EDIT_BUILDING_SUCCESS:
                return {
                    ...state,
                    editBuildingData: { success: true, ...action.response }
                }
            case actionTypes.EDIT_BUILDING_FAILURE:
                return {
                    ...state,
                    editBuildingData: { success: false, ...action.error }
                }

                case actionTypes.DELETE_BUILDING_REQUEST:
                    return {
                        ...state
                    }
                case actionTypes.DELETE_BUILDING_SUCCESS:
                    return {
                        ...state,
                        deleteBuildingData: { success: true, ...action.response }
                    }
                case actionTypes.DELETE_BUILDING_FAILURE:
                    return {
                        ...state,
                        deleteBuildingData: { success: false, ...action.error }
                    }

            default :
            return{
                ...state
            }
    }
}