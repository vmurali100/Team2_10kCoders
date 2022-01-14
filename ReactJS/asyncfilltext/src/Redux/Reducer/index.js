import { GET_DATA, GET_NAME } from "../Actions/Action-types";

const defState = {
    filltext : [ "1" ,"2" , "3"] ,
    name : []
}

export const Reducer = (state = defState , actions)=>{
switch (actions.type) {
    case GET_DATA:
      return actions.payload
  case GET_NAME : 
  return  actions.payload
    default:
       return state.filltext
}
}