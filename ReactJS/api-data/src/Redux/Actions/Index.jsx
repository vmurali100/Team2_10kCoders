import axios from "axios";
import { GET_ALL_USERS } from "./ActionTypes";


export function getAllUsersAction(){
    return (dispatch)=>{
          axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
              dispatch({
                  type: GET_ALL_USERS,
                  payload:res.data
              })
          })
    }
}