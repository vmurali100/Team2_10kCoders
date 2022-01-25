

const defaultState = {
    token: ""
}
export default function rootReducer(state=defaultState,action)
{
    console.log("from reducer")
    switch (action.type) 
    {
        case "GET_USER_TOKEN":
            console.log(action.payload)
            return action.payload;
    
        default:
            return state.token;
    }
}