import { Get_ALL_Users } from "../actions/actionTypes";



const defaultstate = {
    users:{},
}



export default function rootReducer(state=defaultstate , action){
    switch (action.type) {
        case Get_ALL_Users:
            
            return action.payload;
    
        default:
            return action.payload;
    }
}