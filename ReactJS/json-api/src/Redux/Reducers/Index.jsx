import React from "react";
import { GET_ALL_TODOS } from "../Actions/ActionTypes";

const initstate = {
    todos:[]
}

const rootReducer = (state=initstate,action)=>{
 switch(action.type){
     case   GET_ALL_TODOS :
         var data = [...state]
      data.push(action.payload)
      return data
     default:
         return state.todos

 }
}
export default rootReducer;