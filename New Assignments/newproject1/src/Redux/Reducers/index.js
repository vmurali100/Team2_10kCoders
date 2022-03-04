import React from 'react'
import { GET_DATA } from '../Actions/actionTypes'

export const rootReducer = (state,action) => {
  switch (state,action.type) {
      case GET_DATA:
          console.log("GETTING DATA REDUCERS")
          return action.payload
  
      default:
          console.log("Default REducer Execution")
  }
}
