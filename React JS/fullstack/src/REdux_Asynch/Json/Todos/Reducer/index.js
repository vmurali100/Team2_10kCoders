import { GET_ALL_TODOS } from "../Actions/indexTypes";

const defaultState = {
  todos: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return action.payload;

    default: 
      return state.todos; 
  }
}