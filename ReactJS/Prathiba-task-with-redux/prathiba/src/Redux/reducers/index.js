const initialState =
{
    token: { data: { status: "", data: {} } },
    register: { data: { status: "", data: "" } },
    emailVerification: { data: { status: "", data: "" } }
    // token:{},
    // EmailVerificationCode : {}
}

export const reducer = (state = initialState, action) => {
    console.log("action", action.payload);
    switch (action.type) {
        case "Login_Verification":
            return { ...state, token: action.payload };

        case "Remove_Token":
            return {...state, token: { data: { status: "", data: {} } }};

        case "Register_Verification":
            console.log("Reducer",action.payload);
            return { ...state, register: action.payload };

        case "Email_Verification":
            console.log("Email verification reducer",action.payload);
            return { ...state, emailVerification: action.payload};

        default:
            console.log("default")
            return state;
    }
}


