export function getUserAction(){
    return{
        type:"GET_USER"
    }
}
export function createUserAction(user){
    return {
        type:"CREATE_USER",payload:user
    }
}