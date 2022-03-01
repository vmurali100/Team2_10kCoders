const initialState =
{
    token: { data: { status: "", data: {} } },
    EmailVerificationCode: { data: { status: "", data: "" } }
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
            return { ...state, EmailVerificationCode: action.payload };;

        default:
            console.log("default")
            return state;
    }
}


