export function getAllUsersAction (){
    return {
        type:"GET_ALL_USERS"
    }
}

export function deleteUserAction(user){
    return {
        type:"DELETE_USER",
        payload:user
    }
}

export function createUserAction(user){
    return {
        type:"CREATE_USER",
        payload:user
    }
}