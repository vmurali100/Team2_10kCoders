import { GET_ALL_CARTS } from "../Actions/indexTypes";

const defaultState = {
  carts: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_CARTS:
      return action.payload;

    default: 
      return state.carts; 
  }
}