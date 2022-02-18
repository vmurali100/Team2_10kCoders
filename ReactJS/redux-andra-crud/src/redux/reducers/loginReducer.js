

const initialState = {
    isLoggedIn : null,
    isAdminLoggedIn : null
} 

export const loginReducer = (state=initialState,action) =>
{
    switch(action.type)
    {
        case "Is_User_Logged_In" :
            return state.isLoggedIn;

        case "User_logged_In" :
            state.isLoggedIn = action.payload
            return state.isLoggedIn;

        case "User_logged_Out" :
            state.isLoggedIn = action.payload
            return state.isLoggedIn;
        default :
        return state;
    }
}