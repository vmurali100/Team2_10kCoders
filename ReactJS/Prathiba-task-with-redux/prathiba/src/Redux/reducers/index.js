const initialState = 
{
    token: { data: { status: "", data: {} } },
    EmailVerificationCode : {data:{status:"",data:""}}
}

export const reducer = (state = initialState, action) => 
{
    console.log("action",action.payload);
    switch (action.type) 
    {
       
        case "Register_Verification":
            console.log("Register_Verification",action.payload);
            return { ...state, EmailVerificationCode: action.payload};

        case "Login_Verification":
            console.log("login_Verification",action.payload);
            return { ...state, token: action.payload };

        default:
            console.log("default")
            return state;
    }
}