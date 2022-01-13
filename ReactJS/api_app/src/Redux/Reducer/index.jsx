import axios from "axios";
import { GET_API_DATA } from "../Action/Action_type";

const data = {
    todos :[]
}

export  const Reducer =(state = data , action)=>{
    switch (action.type) {
        case GET_API_DATA:
            console.log("button clicked")
            console.log(action.payload)
         return action.payload
          
    
        default:
          return state.todos
    }
}