const defaultData = {
  users: [],
  students :["Murali","Krishna","Sam","Kumar"],
  products:[]
};

export default function rootReducer(state = defaultData, action) {
  switch (action.type) {
    case "GET_ALL_STUDETS":
      return state.students;

    case "GET_ALL_PRODUCTS":
      return state.products;

    default:
      return state;
  }
}
