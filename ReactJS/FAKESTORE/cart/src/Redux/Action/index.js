
export const handleCart =()=>{
    return {
        type : "CART_DATA"
    }
}

export const handleCreateUser = (user) =>{
    return {
        type : "CREAT_USER" ,
        payload : user
    }
}