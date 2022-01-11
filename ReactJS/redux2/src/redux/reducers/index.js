const defaultData = {
    students: ["one","two","three"],
    products: ["pone", "ptwo", "pthree"]
}

export default function rootReducer(state = defaultData, action)
{
    switch(action.item)
    {
        case "Get_All_Students":
            return state.students;
        case "Get_All_Products":
            return state.products;
        default:
            return state;
    }
}