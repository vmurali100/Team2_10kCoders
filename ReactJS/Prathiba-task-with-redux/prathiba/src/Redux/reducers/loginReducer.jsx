const initialState = {
    "Id" : "",
    "Token" : "",
    "Message" : ""

}   

export const loginReducer = (state=initialState,action) =>
{
    console.log(action.payload);
    switch (action.type) 
    {
        case "Login_Verification":
            return action.payload;
    
        default:
            return state;
    }
}