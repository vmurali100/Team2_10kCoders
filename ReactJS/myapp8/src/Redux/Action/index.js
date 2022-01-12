// export const getUserAction =() =>{
//     return {
//         type : "GET_USER"
//     }
// }
export const addUserAction =(user) =>{
    return {
        type : "ADD_USER" ,
        payload : user 
    }
    
}
export const deleteUserAction =(user) =>{
    return {
        type : "DELETE_USER" ,
        payload : user 
    }
    
}
export const updateUserAction =(user) =>{
    return {
        type : "UPDATE_USER" ,
        payload : user 
    }
    
}