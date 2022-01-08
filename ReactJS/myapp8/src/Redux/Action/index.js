export const getUserAction =() =>{
    return {
        type : "GET_USER"
    }
}
export const addUserAction =(user) =>{
    return {
        type : "ADD_USER" ,
        payload : user 
    }
}