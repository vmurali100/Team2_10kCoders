import { Get_All_Districts } from "./actionTypes";
import  axios  from 'axios';

export const get_all_users_action = () =>
{
    return async (dispatch)=>
    {
       let res = await axios.get("http://localhost:3000/districts");
            dispatch({
                type:Get_All_Districts,
                payload: res.data
            })
            
    }
}

export const delete_dist_action = (id) =>
{
    return async ()=>
    {
        console.log("action del id",id);
        await axios.delete("http://localhost:3000/districts/"+id);
            
    }
}

export const update_dist_action = (dist) =>
{
    return async ()=>
    {
        console.log("districts",dist);
        await axios.put("http://localhost:3000/districts/"+dist.id,dist);
            
    }
}

export const updateStateAction = (dist) =>
{
    return{
        type: "Update_State",
        payload: 
    }
}   