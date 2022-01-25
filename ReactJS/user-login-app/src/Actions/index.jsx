import axios from "axios";
import React from "react"; 
import { GET_API_DATA } from "./ActionTypes";

export const getaction = ()=>{
    var user = JSON.parse(localStorage.getItem("user")) ;
    axios({
        method:"POST" ,
        url : "https://e-prathibha.com/apis/login" ,
       body :{
           formdata :
           {
            key : "nikhilchandrapoddar099@gmail.com" ,
            password : "nikhil"
           }
       }

    }).then(({data})=>{
        console.log(data)
    })
    return {
        type : GET_API_DATA ,
        payload : user
    }
}




