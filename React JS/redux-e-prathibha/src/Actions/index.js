import axios from 'axios';
import { bindActionCreators } from 'redux';
import { HOME, LOGIN, REGISTER } from './actionTypes';

export const LoginAction = (userlogin,emailverification) => {
    return async (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email", userlogin.email);
        bodyFormData.append("password", userlogin.password);

       await axios.post("https://e-prathibha.com/apis/login",bodyFormData).then(({res})=>{
           console.log("Login data is received",res)
          alert("successfully Login")
          emailverification()
          let logindetails = [res.data.data, userlogin];
          dispatch({
              type:LOGIN,
              payLoad:logindetails
          })
       })
      
    }
   

}

export const RegisterAction = (userRegister,clear) => {
    return async (dispatch)=>{
        var bodyFormData = new FormData();
    bodyFormData.append("email", userRegister.email);
    bodyFormData.append("name", userRegister.name);
    bodyFormData.append("password", userRegister.password);
    bodyFormData.append("confirmPassword", userRegister.confirmPassword);
    bodyFormData.append("phone", userRegister.mobile);

        await axios.post("https://e-prathibha.com/apis/register",bodyFormData).then(({data})=>{
            console.log("Data is received",data)
            
            console.log("user register data",userRegister)
            clear()
            dispatch({
                type:REGISTER,
                payLoad:data
            })
        })
        alert("registration Successful")
    }
}

export const homeAction=()=>{
    return{
        type:HOME
    }
}

export const EmailVerificationAction=()=>{
    
}