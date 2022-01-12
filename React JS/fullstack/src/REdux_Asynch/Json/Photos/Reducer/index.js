import { GET_ALL_PHOTOS } from "../Actions/indexTypes";

const defaultState = {
  photos: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_PHOTOS:
      return action.payload;

    default:
      return state.photos;
  }
}