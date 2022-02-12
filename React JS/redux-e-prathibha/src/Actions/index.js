import axios from 'axios';
import { bindActionCreators } from 'redux';
import { EMAILVERIFICATION, GET_EXAMS_LIST, HOME, LOGIN, PROFILE_DATA, REGISTER, USER_LOG_OUT } from './actionTypes';

export const LoginAction = (userlogin,entry) => {
    return async (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append("email", userlogin.email);
        bodyFormData.append("password", userlogin.password);

       await axios.post("https://e-prathibha.com/apis/login",bodyFormData).then((res)=>{
           console.log("Login data is received",res.data)
          alert("successfully Login")
          // let logindetails = [res.data, userlogin];
          entry()
          console.log("log data",res.data)
          dispatch({
              type:LOGIN,
              payLoad:res.data,
              
          })
       })
      
    }
   

}

export const RegisterAction = (userRegister) => {
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

export const EmailVerificationAction=(verificationCode)=>{
    console.log((verificationCode))
    return async (dispatch)=>{
        await axios.post("https://e-prathibha.com/apis/verifyEmail").then((res)=>{
            console.log("Email Verified Data:",res.data)
            alert("Email Verified Successfully")
            dispatch({
                type:EMAILVERIFICATION,
                payLoad:res.data.data
            })
        })
        

    }
    
}

export const ViewProfileAction=(tokendata,x)=>{
    console.log(tokendata);
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
        console.log(data);
        dispatch({
          type: PROFILE_DATA,
          payload: data.data,
        });
      });
    x();
  };
}
export const GetExamsListAction=(tokendata,x)=>{
    console.log(tokendata[0]);
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
          console.log(data);
          dispatch({
            type: GET_EXAMS_LIST,
            payload: data.data,
          });
        });
      x();
    };
}
export const UserLogOutAction=()=>{
  return {
    type: USER_LOG_OUT,
    payload: {},
  };
}
