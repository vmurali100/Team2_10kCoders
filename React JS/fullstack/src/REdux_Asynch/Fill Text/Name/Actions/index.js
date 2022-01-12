import axios from "axios";
import { GET_ALL_NAMES } from "./indexTypes";

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
    axios.get("https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then((res) => {
      dispatch({
        type: GET_ALL_NAMES,
        payload: res.data,
      });
    });
  };
}