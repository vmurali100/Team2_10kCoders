import { GET_ALL_PERSONS } from "../Actions/indexTypes";

const defaultState = {
  persons: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_PERSONS:
      return action.payload;

    default: 
      return state.persons; 
  }
}