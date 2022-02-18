import { Get_All_Districts } from "./actionTypes";
import  axios  from 'axios';

export const get_all_users_action = () =>
{
    return async (dispatch)=>
    {
      await axios.get("http://localhost:3000/districts").then((res)=>{
        dispatch({
            type:Get_All_Districts,
            payload: res.data
        })
       })
       console.log("step2: dispatch action")   
    }
}

export const delete_dist_action = (id) =>
{
    return async ()=>
    {
        console.log("action del id",id);
        await axios.delete("http://localhost:3000/districts/"+id);
        // get_all_users_action();
    }
}

export const update_dist_action = (dist,id) =>
{
    return async ()=>
    {
        console.log("districts",dist);
        await axios.put("http://localhost:3000/districts/"+id,dist);
    }
}

export const add_dist_action = (dist) =>
{
    return async ()=>
    {
        await axios.post("http://localhost:3000/districts/",dist);
    }
}
  