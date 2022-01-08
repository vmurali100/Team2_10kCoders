const data = {
    users :[]
}
 const Reducer = (state = data , action)=>{
// const {type , payload} = action

switch (action.type) {
    case "GET_USER":
        return state.users
       case "ADD_USER" :
           let newUser = [...state] 
           newUser.push(action.payload) 
            return newUser
    default:
        return state.users
       
}
 }
 export default Reducer 
