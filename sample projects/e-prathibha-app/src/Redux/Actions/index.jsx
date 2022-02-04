import axios from "axios";
import React from "react";
import { SIGN_UP_USER_DATA, USER_LOGIN } from "./ActionTypes";

export const Register_User_Action = (userRegi)=>{
    console.log(userRegi)
   return (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email", userRegi.email);
        bodyFormData.append("name", userRegi.name);
        bodyFormData.append("password", userRegi.password);
        bodyFormData.append("phone", userRegi.mobile);
        bodyFormData.append("confirmpassword", userRegi.confirmpassword);
        // bodyFormData.append("password", userRegi.password);
            axios({
            method: "post",
            url: "https://e-prathibha.com/apis/register",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SIGN_UP_USER_DATA,
                payload: res.data
            })
        }) 
    // }
}
}


export const UserLogInAction =(user)=>{
    return (dispatch) => {
        // var userdata = JSON.parse(localStorage.getItem("user"))
console.log(user)
        var bodyFormData = new FormData();
        bodyFormData.append("email", user.username);
        bodyFormData.append("password", user.password);
        axios({
            method: "post",
            url: "https://e-prathibha.com/apis/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((res) => {
            console.log(res.data);
            // if(user.username == )
             
            dispatch({
                type: USER_LOGIN,
                payload: res.data
            })
        }) 
    }
 return (dispatch)=>{
     axios.get('')
 }
}

export  const  VerifyEmailAction =()=>{
  
}