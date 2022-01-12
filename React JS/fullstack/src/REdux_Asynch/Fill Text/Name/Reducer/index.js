import { GET_ALL_NAMES} from "../Actions/indexTypes";

const defaultState = {
  names: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_NAMES:
      return action.payload;

    default: 
      return state.names; 
  }
}