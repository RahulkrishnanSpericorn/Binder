import * as actionTypes from './constants'

const initialState ={
    ConsultanciesData:{}
}

export default (state = initialState,action)=>{

    switch(action.type){
        case actionTypes.GETCONSULTANCIESREQUEST :
        return {
            ...state
        }
        case actionTypes.GETCONSULTANCIESSUCCESS :
            return {
                ...state, 
                ConsultanciesData : {success:true, ...action.response }
            }
            case actionTypes.GETCONSULTANCIESFAILURE :
                return {
                    ...state,
                    ConsultanciesData :{success: false, ...action.error}
                }
                default :
                return state;
    }
}