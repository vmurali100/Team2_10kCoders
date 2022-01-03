function rootReducer(state,action)
{
    switch(action.item)
    {
        case "GET_ALL_STUDENTS":
            return "Hello from students";
        case "GET_ALL_PRODUCTS":
            return "Hello from Products";
        default:
            return "hello";
    }
}
export default rootReducer;