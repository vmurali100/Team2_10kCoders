import { GET_ALL_USERS } from "../Actions/indexTypes";

const defaultState = {
  users: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload;

    default: 
      return state.users; 
  }
}