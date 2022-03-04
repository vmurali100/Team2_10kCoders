import React from 'react'
import { GET_DATA } from '../actions/actionTypes';

export const rootReducer = (state,action) => {
  switch (action.type) {
      case GET_DATA:
          console.log("REducer Targeted")
          return action.payload
  
      default:
          console.log("It's Executing Deafult Reducer")
  }
}
