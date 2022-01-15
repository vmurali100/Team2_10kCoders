import {
  GET_ALBUMS,
  GET_CART,
  GET_COMMENTS,
  GET_DATA,
  GET_EMPLOYEE,
  GET_JSON_USERS,
  GET_NAME,
  GET_PHOTOS,
  GET_POSTS,
  GET_PRODUCTS,
  GET_TODOS,
  GET_USERS,
} from "../Actions/Action-types";

const defState = {
  filltext: [],
  name: [],
  employee: [],
  // +++
  users: [],
  cart: [],
  products: [],
  // ++++
  todos: [],
  jsonusers: [],
  albums: [],
  posts: [],
  photos: [],
  comments: [],
};

export const Reducer = (state = defState, actions) => {
  switch (actions.type) {
    case GET_DATA:
      return actions.payload;
    case GET_NAME:
      return actions.payload;
    case GET_EMPLOYEE:
      return actions.payload;
    // FAKESTOREE+++++++++++++++++++
    case GET_USERS:
      return actions.payload;
    case GET_PRODUCTS:
      return actions.payload;
    case GET_CART:
      return actions.payload;

    // JSON -PLACEHOLDER +++++++++++++++++++++++++++
    case GET_TODOS:
      return actions.payload;
    case GET_ALBUMS:
      return actions.payload;
    case GET_COMMENTS:
      return actions.payload;
    case GET_JSON_USERS:
      return actions.payload;
    case GET_PHOTOS:
      return actions.payload;
    case GET_POSTS:
      return actions.payload;
    default:
      return state.filltext;
  }
};
