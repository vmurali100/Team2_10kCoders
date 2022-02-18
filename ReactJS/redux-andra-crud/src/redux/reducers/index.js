import { Add_District, Delete_All_Districts, Get_All_Districts, Update_All_Districts } from "../actions/actionTypes";

export const districtReducer = (state=[] ,action) => {
    console.log("reducer: action in reducer index.js::",action);
    switch (action.type) 
    {
        case Get_All_Districts:
                console.log("reducer payload", action.payload)
            return action.payload;

        case "Update_State":
            return action.payload;
        
        case Add_District:
            return state;
    
        default:
            console.log("reducer: default getting called in reducer")
            return state;
    };
};
