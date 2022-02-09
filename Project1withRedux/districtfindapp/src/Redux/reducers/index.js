import React from 'react';
import { GET_ALL_DISTRICTS } from '../actions/actionTypes';

export const rootReducer = (state,action) => {
  switch (action.type) {
      case GET_ALL_DISTRICTS:  
          return  action.payload
        case "Update":
            console.log("This is another REDUCER");
            return{state}
  
      default:
        console.log("GET default REDUCER");
          return state;
          
  }
};
