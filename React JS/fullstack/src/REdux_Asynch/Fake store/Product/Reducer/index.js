import { GET_ALL_PRODUCTS } from "../Actions/indexTypes";

const defaultState = {
  users: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload;

    default: 
      return state.users; 
  }
}