import { Add_District, Delete_All_Districts, Get_All_Districts, Update_All_Districts } from "../actions/actionTypes";

export const districtReducer = (state=[
    
] ,action) => {
    switch (action.type) 
    {
        case Get_All_Districts:
            return action.payload;

        case Update_All_Districts:
            return state;
        
        case Delete_All_Districts:
            return state;
        
        case Add_District:
            return state;
    
        default:
            return state;
    };
};
