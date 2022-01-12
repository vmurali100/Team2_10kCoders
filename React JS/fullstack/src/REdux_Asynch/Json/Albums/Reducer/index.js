import { GET_ALL_ALBUMS } from "../Actions/indexTypes";

const defaultState = {
  albums: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_ALBUMS:
      return action.payload;

    default: 
      return state.albums; 
  }
}