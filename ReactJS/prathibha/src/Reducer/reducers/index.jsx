import React from "react";
import {
  SIGN_UP_USER_DATA,
  EMAIL_VERIFICATION,
  USER_LOGIN,
  PROFILE_DATA,
  GET_EXAMS_LIST,
  USER_LOG_OUT,
  START_EXAM,
  END_EXAM,
} from "../actions/Actiontype";

const initState = {
  tokendata: [],
  code: "",
  profiledata: {},
  examslist: [],
  startexam: {},
  end: {},
};

export const Reducer = (state = initState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SIGN_UP_USER_DATA:
      return { ...state, code: payload };

    case EMAIL_VERIFICATION:
      return { ...state, tokendata: payload };

    case USER_LOGIN:
      console.log(payload);
      var newarr = [...state];
      newarr.push(payload);
      console.log(newarr);
      return newarr[0];
    case PROFILE_DATA:
      var newodj = { ...state, profiledata: payload };

      return newodj;

    case GET_EXAMS_LIST:
      var arr = {...state,}
      arr.push(payload);
      console.log(arr);
      return arr.push(payload);
    case USER_LOG_OUT:
      state.profiledata = payload;
      return state.profiledata;
    case START_EXAM:
      let examqtions = { ...state, startexam: payload };
      return examqtions;
    case END_EXAM:
      let end = { ...state, end: payload };
      return end;
    default:
      return state.code;
  }
};