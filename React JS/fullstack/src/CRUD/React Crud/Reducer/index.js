
const defaultState = {
    users: [
      { fname: "Hari Vardhan" },
      { fname: "Giri vardhan" },
      { fname: "Sohail Khan" },
    ],
  };
  
  export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
      case "ADD_USER":
        var allUsers = [...state];
        allUsers.push(action.payload);
        return allUsers;
  
      case "DELETE_USER":
        return state.filter((user) => user.fname !== action.payload.fname);
  
      case "UPDATE_USER":
        console.log(action.payload);
        allUsers = [...state];
        allUsers[action.payload.id] = action.payload;
        return allUsers;
      default:
        return state.users;
    }
  }