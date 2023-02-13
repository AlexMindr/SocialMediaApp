import * as api from '../api'
import { AUTH } from '../constants/actionTypes'

export const signup = (formValues,navigate)=>async (dispatch) =>{
    try {
        const {data}= await api.signup(formValues)
        dispatch({type:AUTH,payload: data})
        navigate('/')
    } catch (error) {
        console.log(error.response.data)
    }
    
}

export const login = (formValues,navigate)=>async (dispatch) =>{
    try {
        const {data}= await api.login(formValues)
        console.log(data,1)
        dispatch({type:AUTH,payload: data})
        navigate('/')
    } catch (error) {
        console.log(error.message)
    }
}

