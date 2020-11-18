import * as actionTypes from './constants'
import * as Service from './services'

const getConsultancies = params =>{

    return async dispatch =>{
        try{
            dispatch({type : actionTypes.GETCONSULTANCIESREQUEST})
            const res = await Service.getConsultancies(params)
            console.log('res', res)
            if(res && res.status === 200){
                const getConsultancyData = res.data;
                if(getConsultancyData){
                    dispatch({type : actionTypes.GETCONSULTANCIESSUCCESS, response: getConsultancyData })
                } else{
                    dispatch({type : actionTypes.GETCONSULTANCIESFAILURE, error : getConsultancyData})
                }
            }else{
                dispatch({type : actionTypes.GETCONSULTANCIESFAILURE, error : res.response && res.response.data})
            }

        }catch(e){
            dispatch({type : actionTypes.GETCONSULTANCIESFAILURE, error : e.response && e.response.data})
        }
    }
}

const addConsultancies = params =>{

    return async dispatch =>{
        try{
            dispatch({type: actionTypes.ADDCONSULTANCIESREQUEST})
            const res = await Service.addConsultancies(params)
            console.log('res', res)
            if(res && res.status === 200){
                if(res.data){
                    dispatch({type: actionTypes.ADDCONSULTANCIESSUCCESS, response:res.data})
                }else{
                dispatch({ type: actionTypes.ADDCONSULTANCIESFAILURE, error: res.data })
                }
            }else{
                dispatch({ type: actionTypes.ADDCONSULTANCIESFAILURE, error: res.data })
            }
        }catch(e){
            dispatch({ type: actionTypes.ADDCONSULTANCIESFAILURE, error: e.response && e.response.data })
        }
    }
}

const getConsultanciesById = id  => {

    return async dispatch =>{
        
        try{
            dispatch({type: actionTypes.GETCONSULTANCIESBYIDREQUEST})
            const res = await Service.getConsultanciesById(id)
            console.log('resbyId', res)
            if(res && res.status === 200){
                if(res.data){
                    dispatch({ type : actionTypes.GETCONSULTANCIESBYIDSUCCESS, response:res.data })
                }else{
                    dispatch({type : actionTypes.GETCONSULTANCIESBYIDFAILURE, error : res.data})
                }
            }else{
                dispatch({type : actionTypes.GETCONSULTANCIESBYIDFAILURE, error : res.data})
            }
        }catch(e){
            dispatch({type : actionTypes.GETCONSULTANCIESBYIDFAILURE, error : e.response && e.response.data})
        }
    }
}

const editConsultanciesById = (params,id)  => {

    return async dispatch =>{
        
        try{
            dispatch({type: actionTypes.EDITCONSULTANCIESBYIDREQUEST})
            const res = await Service.editConsultanciesById(params,id)
            console.log('resUpdate', res)
            if(res && res.status === 200){
                if(res.data){
                    dispatch({ type : actionTypes.EDITCONSULTANCIESBYIDSUCCESS, response:res.data })
                }else{
                    dispatch({type : actionTypes.EDITCONSULTANCIESBYIDFAILURE, error : res.data})
                }
            }else{
                dispatch({type : actionTypes.EDITCONSULTANCIESBYIDFAILURE, error : res.data})
            }
        }catch(e){
            dispatch({type : actionTypes.EDITCONSULTANCIESBYIDFAILURE, error : e.response && e.response.data})
        }
    }
}



export default {
    getConsultancies,
    addConsultancies,
    getConsultanciesById,
    editConsultanciesById
}