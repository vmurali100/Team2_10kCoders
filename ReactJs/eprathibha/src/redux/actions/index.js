import { GET_EXAM_DATA, GET_FINISHEXAM_DATA, GET_LOGIN_DATA, GET_REGISTER_DATA, GET_STARTEXAM_DATA, GET_VERIFY_DATA } from "./actionTypes"
import axios from 'axios'

export const registeraction=(users)=>{
    return async (dispatch)=>{
         await axios.post("https://e-prathibha.com/apis/register",users).then((res)=>{
             dispatch({
                type:GET_REGISTER_DATA,
                payload:res.data
            })

        })
           
        
    }
}
 export const verifyaction=(regdata)=>{
     return async (dispatch)=>{
         await axios.post("https://e-prathibha.com/apis/verifyEmail",regdata).then((res)=>{
             
             dispatch({
                 type:GET_VERIFY_DATA,
                 payload:res.data
             })
         })
     }
 }

 export const loginaction=(loginuser)=>{
     return async (dispatch)=>{
         await axios.post("https://e-prathibha.com/apis/login",loginuser).then((res)=>{
             dispatch({
                 type:GET_LOGIN_DATA,
                 payload:res.data
             })
         })
     }
 }

 export const examlistaction=({id,tokenu,server_key})=>{
     return async (dispatch)=>{
         await axios.get("https://e-prathibha.com/apis/test_free_exam",{
             body:{
                 "examId":12,
                 "qno":1
             },
             headers:{
"id":id,
"server_key":"3w99V63pW7tJ7vavGXtCKo8cp",
"tokenu":tokenu,

         }

         }

         ).then((res)=>{
             dispatch({
                 type:GET_EXAM_DATA,
                 payload:res.data
             })
         })
     }
 }
 export const startexamaction=({id,tokenu,server_key,examId})=>{
    return async (dispatch)=>{
        await axios.get(`https://e-prathibha.com/apis/start_exam_new?examId=${examId}`,{
          
            headers:{
"id":id,
"server_key":"3w99V63pW7tJ7vavGXtCKo8cp",
"tokenu":tokenu,

        }

        }

        ).then((res)=>{
            dispatch({
                type:GET_STARTEXAM_DATA,
                payload:res.data
            })
        })
    }
}
export const finishexamaction=({id,tokenu,server_key,examId})=>{

    return async (dispatch)=>{
      const  body={
            "examId":examId,
            "qno":1
        }
        await axios.post("https://e-prathibha.com/apis/finishExam",body,{
        
            headers:{
"id":id,
"server_key":"3w99V63pW7tJ7vavGXtCKo8cp",
"tokenu":tokenu,

        }

        }

        ).then((res)=>{
            dispatch({
                type:GET_FINISHEXAM_DATA,
                payload:res
            })
        })
    }
}
