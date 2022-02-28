const initialState = 
{
    // token: { data: { status: "", data: {} } },
    // EmailVerificationCode : {data:{status:"",data:""}}
    token:{},
    EmailVerificationCode : {}
}

export const reducer = (state = initialState, action) => 
{
    console.log("action",action.payload);
    switch (action.type) 
    {
       
        case "Register_Verification":
            console.log("Register_Verification",action.payload);
            const obj = { ...state, EmailVerificationCode: action.payload};
            console.log("new obj",obj);
            return obj;

        case "Login_Verification":
            console.log("login_Verification",action.payload);
            return { ...state, token: action.payload };

        default:
            console.log("default")
            return state;
    }
}


