import { GET_ALL_PHOTOS } from "../actions/actiontypes";

const defaultState={
    photos:[]
}
export default function userReducer(state=defaultState,action){
    switch(action.type){
        case GET_ALL_PHOTOS:
            console.log()
            return action.payload;
            default:
                return state.photos
            
}
}