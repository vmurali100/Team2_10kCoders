import axios from "axios";
import React from "react"; 
import { GET_API_DATA } from "./ActionTypes";

export function getaction() {


    return (dispatch) => {
        var userdata = JSON.parse(localStorage.getItem("user"))
console.log(userdata)
        var bodyFormData = new FormData();
        bodyFormData.append("email", userdata.username);
        bodyFormData.append("password", userdata.password);
        axios({
            method: "post",
            url: "https://e-prathibha.com/apis/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }
        })
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_API_DATA,
                payload: res.data
            })
        }) 
    }


    



}
