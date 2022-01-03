export default function rootReducer(state,action)
{
    switch(action.type)
    {
        case "Get_Students":
            return "get students";
        case "Get_Items":
            return "get items";
        default:
            return "default";
    }
}