import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EMAIL_VERIFICATION, PROFILE_DATA, SIGN_UP_USER_DATA, USER_LOGIN } from "./ActionTypes";

export const Register_User_Action = (userRegi)=>{
    console.log(userRegi)
   return (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email", userRegi.email);
        bodyFormData.append("name", userRegi.name);
        bodyFormData.append("password", userRegi.password);
        bodyFormData.append("confirmPassword", userRegi.confirmPassword);
        bodyFormData.append("phone", userRegi.mobile);
       
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
                payload: res.data.slice(33 ,40)
            })
        }) 
    // }
}
}


export const UserLogInAction =(user)=>{
    // const tokendata = useSelector((state) => state.tokendata);
    const navigate = useNavigate();
    console.log(user)
    return async (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email", user.email);
        bodyFormData.append("password", user.password);
        var data = bodyFormData;
       var url = "https://e-prathibha.com/apis/login";
      var headers = { "Content-Type": "multipart/form-data" }
      await axios.post(url , data , headers).then((res) => {
            console.log(res.data);
            alert("succesfully Loggedin")
         
           dispatch({
                type: USER_LOGIN,
                payload: res.data.data
            })
        }) 
        navigate("profile")
    }
    

}

export  const  VerifyEmailAction =(verificationCode)=>{
    // const code = useSelector((state) => state.code) ;
    console.log(verificationCode)


  return async (dispatch) =>{
   var url = "https://e-prathibha.com/apis/verifyEmail" ;
   var data = {
        reg_code : verificationCode
    }
   var headers = { "Content-Type": "application/json" }
   await axios.post( url ,data ,headers).then((res)=>{
              console.log(res.data);
              alert("Email verified succesfully")
            //   ViewProfileAction()
              dispatch(
                 { type : EMAIL_VERIFICATION ,
                   payload : res.data.data
                 }
                )
    })
    }
   
  }
export const ViewProfileAction =()=>{
    const tokendata = useSelector((state) => state.tokendata);
    const navigater = useNavigate();
    var header = {
        token : tokendata.token,
        id : tokendata.id
    }
    var url = "https://e-prathibha.com/apis/profile"
    return async (dispatch)=>{
    await axios.post(url , header ).then(({data})=>{
        console.log(data)
        navigater("register");
        dispatch({
            type : PROFILE_DATA ,
            payload : data
        })
    })
    }
}