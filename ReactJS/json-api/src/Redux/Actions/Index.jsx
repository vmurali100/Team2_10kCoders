import axios from 'axios'
import React from 'react'
import { GET_ALL_TODOS } from './ActionTypes'


export default function getAllUsersAction(){
  
    return  async (dispatch)=>{
       axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            console.log(res.data)
            // dispatch({
           
            //     type:GET_ALL_TODOS,
            //     payload:res.data
            // })
           
        })
    }
}
 