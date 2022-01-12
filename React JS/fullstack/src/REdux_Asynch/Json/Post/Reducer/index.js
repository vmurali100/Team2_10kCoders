import { GET_ALL_POSTS } from "../Actions/indexTypes";

const defaultState = {
  posts: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.payload;

    default: 
      return state.posts; 
  }
}