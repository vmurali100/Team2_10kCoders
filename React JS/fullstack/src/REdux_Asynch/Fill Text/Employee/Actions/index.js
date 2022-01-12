import { GET_ALL_EMPLOYEES } from "./indexTypes";
import axios from "axios";

export function getAllUsersAction() {
  // axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
  //     console.log(res.data)
  //     return {
  //         type:GET_ALL_USERS,
  //         payload:res.data
  //     }
  // })

  // When we add thunk middleware .. we can return asycn functions which returs an Object
  return (dispatch) => {
    axios.get("https://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then((res) => {
      dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: res.data,
      });
    });
  };
}