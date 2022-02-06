import axios from "axios";
import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EMAIL_VERIFICATION, GET_EXAMS_LIST, PROFILE_DATA, SIGN_UP_USER_DATA, USER_LOGIN } from "./ActionTypes";

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


export const UserLogInAction =(user , x)=>{
    // const tokendata = useSelector((state) => state.tokendata);
    // let navigate = useNavigate();
    // console.log(user)
    return (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email", user.email);
        bodyFormData.append("password", user.password);
        var data = bodyFormData;
       var url = "https://e-prathibha.com/apis/login";
      var headers = { "Content-Type": "multipart/form-data" }
    axios.post(url , data , headers).then((res) => {
            console.log(res.data);
            alert("succesfully Loggedin")
        //    navigate("content")
              x()
           dispatch({
                type: USER_LOGIN,
                payload: res.data.data
            })
        }) 
        
       
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
    let tokendata = useSelector((state) => state.tokendata);
    // const navigater = useNavigate();
    var header = {
        tokenu : tokendata.Token,
        id : tokendata.Id
    }
    var url = "https://e-prathibha.com/apis/profile"
    return async (dispatch)=>{
    await axios.post(url , header ).then(({data})=>{
        console.log(data)
        // navigater("profile");
        dispatch({
            type : PROFILE_DATA ,
            payload : data
        })
    })
    }
}

 const GetExamsListAction =(x)=>{
    let tokend = useSelector((state) => state.tokendata);
console.log(tokend)
    return async (dispatch) =>{
      
        var header = {
            tokenu : tokend.Token,
            id : tokend.Id
        }
        var body = {
            "examId" : 12 ,
            "qno" : 1
        }
        var url = "https://e-prathibha.com/apis/test_free_exam" ;
      await  axios.post(url ,body ,header ).then(({data})=>{
            console.log(data) ;
            x()
            dispatch({
                type : GET_EXAMS_LIST ,
                payload : data
            })
        })
    }
}
// const MSTP =(state)=>{
//     return{
//         tokend : state.tokendata
//     }
// }
export default (GetExamsListAction)