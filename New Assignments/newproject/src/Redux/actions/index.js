import { GET_DATA } from "./actionTypes"
import axios from "axios"

export const getDataAction = ()=>{
 return  async(dispatch)=>{
    await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        console.log(res.data)
        console.log("ACTION TIggered")
        dispatch({type:GET_DATA,payload:res.data})
    })
 }
}