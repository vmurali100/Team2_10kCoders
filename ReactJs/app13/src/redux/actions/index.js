export function getAllusersActions(){
    return{
        type:"GET_ALLUSERS"
    }
}
export function deleteUsersActions(user){
    return{
        type:"DELETE_USER",
        payload:user
    }
}
export function createUsersActions(user){
    return{
        type:"CREATE_USER",
        payload:user
    }
}