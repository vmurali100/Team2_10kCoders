import { GET_ALL_EMPLOYEES } from "../Actions/indexTypes";

const defaultState = {
  employees: {},
};
export default function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_ALL_EMPLOYEES:
      return action.payload;

    default: 
      return state.employees; 
  }
}