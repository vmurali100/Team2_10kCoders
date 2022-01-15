import { GET_CART, GET_DATA, GET_EMPLOYEE, GET_NAME, GET_PRODUCTS, GET_USERS } from "../Actions/Action-types";

const defState = {
    filltext : [] ,
    name : [] ,
    employee : [] ,
    users : [],
    cart : [],
    products : []
}

export const Reducer = (state = defState , actions)=>{
switch (actions.type) {
    case GET_DATA:
      return actions.payload
  case GET_NAME : 
  return  actions.payload
  case GET_EMPLOYEE : 
  return actions.payload
  // FAKESTOREE+++++++++++++++++++
  case GET_USERS:
    return actions.payload
case GET_PRODUCTS : 
return  actions.payload
case GET_CART : 
return actions.payload
    default:
       return state.filltext
}
}