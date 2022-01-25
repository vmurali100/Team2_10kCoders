

const defaultState = {
    Id: "",
    Token: "",
    Message: ""
}
export default function rootReducer(state=defaultState,action)
{
    switch (action.type) 
    {
        case "GET_USER_TOKEN":
            console.log(action.payload.data)
            return action.payload.data;
    
        default:
            return state;
    }
}