import { GET_DATA, GET_EMPLOYEE, GET_NAME } from "../Actions/Action-types";

const defState = {
    filltext : [] ,
    name : [] ,
    employee : []
}

export const Reducer = (state = defState , actions)=>{
switch (actions.type) {
    case GET_DATA:
      return actions.payload
  case GET_NAME : 
  return  actions.payload
  case GET_EMPLOYEE : 
  return actions.payload
    default:
       return state.filltext
}
}