import * as actionTypes from './constants'

const initialState ={
    ConsultanciesData:{}
}

export default (state = initialState,action)=>{

    switch(action.type){
        case actionTypes.GET_CONSULTANCIES_REQUEST :
        return {
            ...state
        }
        case actionTypes.GET_CONSULTANCIES_SUCCESS :
            return {
                ...state, 
                ConsultanciesData : {success:true, ...action.response }
            }
            case actionTypes.GET_CONSULTANCIES_FAILURE :
                return {
                    ...state,
                    ConsultanciesData :{success: false, ...action.error}
                }
                default :
                return state;
    }
}