const data = {
    user : []
  }
   
  
  
  const Reducer = (state = data , action)=>{
  switch (action.type) {
    case "GET_USER":
      return state
       case "CREAT_USER" :
        let finalUser = [...state.user] 
        finalUser.push(action.payload)
         return finalUser 
    default:
     return state
  }
  }
  export default Reducer