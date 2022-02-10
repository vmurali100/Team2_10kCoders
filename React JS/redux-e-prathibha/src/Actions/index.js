import axios from 'axios';
import { bindActionCreators } from 'redux';
import { HOME, LOGIN } from './actionTypes';

export const loginAction = () => {
    return async (dispatch) => {
        let loginDetails = await axios.post("https://e-prathibha.com/apis/login")
        console.log(loginDetails)
        dispatch({
            type:LOGIN,
            payLoad:loginDetails
        })
    }

}

export const registerAction = () => {

}

export const homeAction=()=>{
    return{
        type:HOME
    }
}