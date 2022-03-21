const initialState =
{
    token: { data: { status: "", data: {} } },
    register: { data: { status: "", data: "" } },
    emailVerification: { data: { status: "", data:"" }},
    userData: {},
    examList : [],
    startExam:[]
}

export const reducer = (state = initialState, action) => 
{
    switch (action.type) 
    {
        case "Login_Verification":
            return { ...state, token: action.payload };

        case "Remove_Token":
            return {...state, token: { data: { status: "", data: {} } }};
        
        case "Remove_Email_Verification":
            return {...state, emailVerification: { data: { status: "", data:"" }}, register: { data: { status: "", data: "" } }};

        case "Register_Verification":
            return { ...state, register: action.payload };

        case "Email_Verification":
            return { ...state, emailVerification: action.payload};
            
        case "User_Data":
            return {...state, userData: action.payload};

        case "Exam_List":
            return {...state, examList: action.payload};

        case "Start_Exam":
            return {...state, startExam: action.payload}

        default:
            return state;
    }
}