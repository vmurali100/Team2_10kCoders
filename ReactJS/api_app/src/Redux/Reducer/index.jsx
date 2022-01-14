
import { GET_ALBUMS_API, GET_API_DATA } from "../Action/Action_type";

const data = {
    todos :[] ,
    albums : []

}

export  const Reducer =(state = data , action)=>{
    const {type , payload} = action 
    switch (type) {
        case GET_API_DATA:
            // console.log("button clicked")
            // console.log(action.payload)
            state.todos.push(payload)
         return state.todos
          case GET_ALBUMS_API :
              state.albums.push(payload)
              return state.albums
    
        default:
          return state
    }
}