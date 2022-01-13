import { GETAPI_DATA } from "../Action/actiontype";


const data = {
  users: [
    { fname: "akvm" },
    { fname: "harish" },
    { fname: "ajay" },
  ],
};

export default function Reducer(state = data, action) {

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
      case GETAPI_DATA:
        return  action.payload
    default:
      return state.users;
     
        

       
  }
}