import { GET_ALL_USERS } from "./actiontypes"
import axios from "axios"

export function getAllUsersAction(){
    return(dispatch)=>{
        axios.get(" https://fakestoreapi.com/users ").then(res=>{
console.log(res.data)
dispatch({
    type:GET_ALL_USERS,
    payload:res.data
})

        })
    }
}