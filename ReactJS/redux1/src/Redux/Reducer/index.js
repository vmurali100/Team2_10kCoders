const defaultData = {
    students : ["Ervin","Prabhu"],
    products : ["Tv", "Mobile", "Fridge"]
}

function rootReducer(state = defaultData,action)
{
    switch(action.item)
    {
        case "GET_ALL_STUDENTS":
            return state.students;
        case "GET_ALL_PRODUCTS":
            return state.products;
        default:
            return state;
    }
}
export default rootReducer;