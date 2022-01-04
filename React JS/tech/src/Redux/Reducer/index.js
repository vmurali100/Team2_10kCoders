const defaultData ={
    users:[] ,
    students :['Hari','Bhanu','Ravi','Jaanu','Rambai'],
    products:[]
}

export default function rootReducer(state = defaultData, action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return state.students;

        case "GET_ALL_PRODUCTS":
            return state.products;

        default:
            return state;
    }
}