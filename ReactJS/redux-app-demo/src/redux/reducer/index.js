const defaultState = {
  users: [],
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return defaultState.users;
    case "DELETE_USER":
      let allUsers = [...state];
      
      return allUsers.filter((user)=>user.fname !== action.payload.fname);

    case "CREATE_USER":
     let newUsers = [...state];
     newUsers.push(action.payload);
      return newUsers
    default:
      return defaultState.users;
  }
};

export default rootReducer;
