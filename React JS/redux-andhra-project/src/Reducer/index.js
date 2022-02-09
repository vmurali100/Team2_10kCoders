import {
  ADMIN_LOGIN_DATA,
  EDIT_DIST,
  GET_CONST_ANSWER,
  GET_DISTRICTS_DATA,
  GET_USERS_DATA,
  LOGIN_DATA,
  LOG_OUT_USER,
  SIGNUP_DATA,
} from "../Actions/Action_Types";

const defdata = {
  districtsList: [],
  adminList: [],
  usersList: [],
  loggedUser: {},
  loggedAdmin: {},
  result: " ",
  editableUser : {}
};

export const Reducer = (state = defdata, actions) => {
  switch (actions.type) {
    // case GET_DISTRICTS_DATA:
    //   let input = JSON.parse(localStorage.getItem("input"));
    //   localStorage.clear();
    //   //   let copyDis = [...state];
    //   //   copyDis =(actions.payload)

    //   if (state.usersList.length === 0) {
    //     window.alert("Not Registered ..... please Register and Login Again");
    //     // navigate("/register")
    //   }
    //   // else {
    //   // let logged = state.usersList.find( myus => myus.email == user.email && myus.password  == user.password) ;
    //   //   if(logged){
    //   //     // localStorage.setItem("loggedUser" , JSON.stringify(user));
    //   // alert("Login successfull......!")
    //   //     // navigate("/");

    //   //   }
    //   else {
    //     window.alert("Not Registered ..... please Register and Login Again");
    //     // navigate("/register")
    //   }
    //   // }
    //   console.log(input);
    //   let finaloutput = actions.payload.find(
    //     (e) => e.constiuencies.indexOf(input) > -1
    //   );
    //   return finaloutput;
    case SIGNUP_DATA:
      let newuserarr = [...state];
      newuserarr.push(actions.payload);
      return newuserarr;

    case LOGIN_DATA:
      let loguser = { ...state, loggedUser: actions.payload };
      console.log(loguser);
      return loguser;
    case GET_CONST_ANSWER:
      let ans = { ...state, result: actions.payload };
      console.log(ans);
      return ans;
    case LOG_OUT_USER:
      let logOutuser = { ...state, loggedUser: actions.payload };
      console.log(logOutuser);
      return logOutuser;
    case ADMIN_LOGIN_DATA:
      let loginAdmin = { ...state, loggedAdmin: actions.payload };
      return loginAdmin;
    case GET_DISTRICTS_DATA:
      let dlist = [...state.districtsList = actions.payload ]
      // dlist.push(actions.payload);
      console.log(dlist)
      return dlist;
    case GET_USERS_DATA:
      let userslist = [...state.usersList];
      userslist.push(actions.payload);
        return userslist;
        case EDIT_DIST :
             let edituser = {...state.editableUser }
             edituser = actions.payload
          return edituser
 
    default:
      return state.usersList;
  }
};