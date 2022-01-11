
// case "ADD_USER":
        
//     case "DELETE_USER":

//     case "UPDATE_USER":


export function addUserAction(user) {
    
    return {
        type:"ADD_USER",
        payload:user
    }
}

export function deleteUserAction(user) {
    return {
        type:"DELETE_USER",
        payload:user
    }
}

export function updateUserAction(user) {
    return {
        type:"UPDATE_USER",
        payload:user
    }
}