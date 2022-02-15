import axios from "axios";
import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EMAIL_VERIFICATION,
  END_EXAM,
  GET_EXAMS_LIST,
  PROFILE_DATA,
  SIGN_UP_USER_DATA,
  START_EXAM,
  USER_LOGIN,
  USER_LOG_OUT,
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

    axios({
      method: "post",
      url: "https://e-prathibha.com/apis/register",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      console.log(res.data);
      dispatch({
        type: SIGN_UP_USER_DATA,
        payload: res.data.slice(33,40),
      });
    });
  
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

      let logindetails = [res.data.data, user];
      dispatch({
        type: USER_LOGIN,
        payload: logindetails,
      });
      x();
    });
  };
};

export const VerifyEmailAction = (verificationCode) => {
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

      dispatch({ type: EMAIL_VERIFICATION, payload: res.data.data });
    });
  };
};
export const ViewProfileAction = (tokendata, x) => {
  console.log("Profile Action Data",tokendata);
  const { Token, Id } = tokendata;
  var body = {
    id: Id,
  };

  var url = "https://e-prathibha.com/apis/profile";
  return (dispatch) => {
    axios
      .post(url, body, {
        headers: {
          id: Id,
          tokenu: Token,
          server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        },
      })
      .then(({ data }) => {
        console.log("return data in profile action",data);
        dispatch({
          type: PROFILE_DATA,
          payload: data.data,
        });
      });
    x();
  };
};

const GetExamsListAction = (tokendata, x) => {
  console.log("Exams List Action in Token data",tokendata);
  return async (dispatch) => {
    var url = "https://e-prathibha.com/apis/test_free_exam";
    await axios
      .post(
        url,
        {
          body: {
            examId: 12,
            qno: 1,
          },
        },
        {
          headers: {
            tokenu: tokendata.Token,
            id: tokendata.Id,
            server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
          },
        }
      )
      .then(({ data }) => {
        console.log("Exams List action",data);
        dispatch({
          type: GET_EXAMS_LIST,
          payload: data.data,
        });
      });
    x();
  };
};

export default GetExamsListAction;

export const UserLogoutAction = () => {
  return {
    type: USER_LOG_OUT,
    payload: {},
  };
};
export const StartExamAction = (tokendata, x) => {
  var url = "https://e-prathibha.com/apis/start_exam_new?examId=12";
  return async (dispatch) => {
    await axios
      .post(
        url,
        {},
        {
          headers: {
            tokenu: tokendata.Token,
            id: tokendata.Id,
            server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: START_EXAM,
          payload: data.data,
        });
      });
    x();
  };
};

export const EndExamAction = (tokendata, x) => {
  var body = {
    examId: "12",
    qno: "1",
  };
  return async (dispatch) => {
    var url = "https://e-prathibha.com/apis/finishExam";
    await axios
      .post(url, body, {
        headers: {
          tokenu: tokendata.Token,
          id: tokendata.Id,
          server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
        },
      })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: END_EXAM,
          payload: data.data,
        });
        x();
      });
  };
};