import { GET_ALL_PRODUCTS } from "./indexTypes";
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
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    });
  };
}