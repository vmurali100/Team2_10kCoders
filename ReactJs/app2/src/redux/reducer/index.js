const defaultData={
    users:[],
    products:["xxx","yyy","zzz","xyz"]
}

export default function rootReducer(state,action){
    switch(action.type){
        case "GET_ALL_STUDENTS":
            return state.students

        case "GET_ALL_PRODUCTS":
            return state.products
        
        case "GET_ALL_ITEMS":
            return state.items

            default:
                return state
    }
}
