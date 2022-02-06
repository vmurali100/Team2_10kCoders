import axios from "axios";
import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EMAIL_VERIFICATION,
  GET_EXAMS_LIST,
  PROFILE_DATA,
  SIGN_UP_USER_DATA,
  USER_LOGIN,
} from "./ActionTypes";

export const Register_User_Action = (userRegi) => {
  console.log(userRegi);
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
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res.data);
      dispatch({
        type: SIGN_UP_USER_DATA,
        payload: res.data.slice(33, 40),
      });
    });
    // }
  };
};

export const UserLogInAction = (user, x) => {
  return (dispatch) => {
    var bodyFormData = new FormData();
    bodyFormData.append("email", user.email);
    bodyFormData.append("password", user.password);
    var data = bodyFormData;
    var url = "https://e-prathibha.com/apis/login";
    var headers = { "Content-Type": "multipart/form-data" };
    axios.post(url, data, headers).then((res) => {
      console.log(res.data);
      alert("succesfully Loggedin");
      localStorage.setItem("loggeduser" , JSON.stringify(user))
      
      dispatch({
        type: USER_LOGIN,
        payload: res.data.data,
      });
      x();
    });
  };
};

export const VerifyEmailAction = (verificationCode) => {
  // const code = useSelector((state) => state.code) ;
  console.log(verificationCode);

  return async (dispatch) => {
    var url = "https://e-prathibha.com/apis/verifyEmail";
    var data = {
      reg_code: verificationCode,
    };
    var headers = { "Content-Type": "application/json" };
    await axios.post(url, data, headers).then((res) => {
      console.log(res.data);
      alert("Email verified succesfully");
      //   ViewProfileAction()
      dispatch({ type: EMAIL_VERIFICATION, payload: res.data.data });
    });
  };
};
export const ViewProfileAction = (tokendata, x) => {
  // let tokendata = useSelector((state) => state.tokendata);
  // const navigater = useNavigate();
  console.log(tokendata);
  const {Token ,Id} = tokendata
  var body ={
    id : Id
  }
  // var headers = [
  // { id : Id },
  //   {tokenu : Token },
  //   {server_key : "3w99V63pW7tJ7vavGXtCKo8cp"},
  // ];
  var url = "https://e-prathibha.com/apis/profile";
  return  (dispatch) => {
     axios.post(url,body,{headers: { id : Id ,
      tokenu : Token ,
      server_key : "3w99V63pW7tJ7vavGXtCKo8cp"}}).then(({ data }) => {
      console.log(data);
      x();
      dispatch({
        type: PROFILE_DATA,
        payload: data.data,
      });
    });
  };
};

const GetExamsListAction = (tokendata,x) => {
//   let tokend = useSelector((state) => state.tokendata);
  console.log(tokendata[0]);
  return async (dispatch) => {
    // var header = {
    //   "tokenu": tokendata.Token,
    //   "id": tokendata.Id,
    //   "server_key" : "3w99V63pW7tJ7vavGXtCKo8cp"
    // };
    // var body = {
    //   examId: 12,
    //   qno: 1,
    // };
    var url = "https://e-prathibha.com/apis/test_free_exam";
    await axios.post(url, {body:{
      examId: 12,
      qno: 1,
    }}, {headers :{
      tokenu: tokendata[0].Token,
      id: tokendata[0].Id,
      server_key : "3w99V63pW7tJ7vavGXtCKo8cp" ,
    }}).then(({ data }) => {
      console.log(data);
      x();
      dispatch({
        type: GET_EXAMS_LIST,
        payload: data.data,
      });
    });
  };
};
// const MSTP =(state)=>{
//     return{
//         tokend : state.tokendata
//     }
// }
export default GetExamsListAction;
