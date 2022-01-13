import { GET_ALL_TODOS } from "./actiontypes"
import axios from "axios"

export function getAllTodosAction(){
    return(dispatch)=>{
axios.get("https://jsonplaceholder.typicode.com/todos ").then(res=>{
    console.log(res.data)
    dispatch({
        type:GET_ALL_TODOS,
        payload:res.data
    })
})
    }
}