export const handleUser =()=>{
    return {
        type : "GET_USER"
    }
}

export const handleCreateUser = (user) =>{
    return {
        type : "CREAT_USER" ,
        payload : user
    }
}