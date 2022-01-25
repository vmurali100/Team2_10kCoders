import axios from 'axios';
import {GET_DATA} from './index'

export function getAllUsersAction() {
   
    return (dispatch) => {
    axios.post("https://e-prathibha.com/apis/login").then((res) => {
      dispatch({
        type: "GET_DATA",
        payload: res.data,
      });
    });
  };
}