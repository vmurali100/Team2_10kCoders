import axios from "axios"
import { useDispatch } from "react-redux"
import { GET_DATA } from "./actionTypes"
export const getDataAction = ()=>{
    return async(dispatch)=>{
        await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res.data)
           dispatch({type:GET_DATA,payload:res.data})
        })
    }
}