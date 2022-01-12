import axios from "axios";
import { GET_ALL_ALBUMS } from "./indexTypes";

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
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
      dispatch({
        type: GET_ALL_ALBUMS,
        payload: res.data,
      });
    });
  };
}