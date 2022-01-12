export function addUseractions(user){

return{
    type:"ADD_USER",
    payload:user
}
}
export function deleteUseractions(user){
    return{
        type:"DELETE_USER",
        payload:user
    }
}
export function updateUseractions(user){
    return{
        type:"UPDATE_USER",
        payload:user
    }
}