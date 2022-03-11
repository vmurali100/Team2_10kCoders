import React from 'react'

 const rootReducer = (state=[],action) => {
  switch (action.type) {
      case "GET_DATA":
          var state = [...state]
          state.push(action.payload)
          console.log(state)
          return state

    case "GET_DATA2":
        var state = [...state]
        state.push(action.payload)
        console.log(state)    
        return state
      default:
         return state
  }
}
export default rootReducer