import { Get_All_Districts } from "./actionTypes";
import  axios  from 'axios';

export const get_all_users_action = (dispatch) =>
{
    return async (dispatch)=>
    {
       let res = await axios.get("http://localhost:3000/districts");
            dispatch({
                type:Get_All_Districts,
                payload: res.data
            })
        // })
            // console.log(res.data)
            
    }
}