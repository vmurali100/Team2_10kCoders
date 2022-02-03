import { GET_DISTRICTS_DATA } from "../Actions/Action_Types";

const defdata = {
  districtsList: [],
  adminList: [],
  usersList: [],
};

export const Reducer = (state = defdata, actions) => {
  switch (actions.type) {
    case GET_DISTRICTS_DATA:
        let input = JSON.parse(localStorage.getItem("input"))
        localStorage.clear()
    //   let copyDis = [...state];
    //   copyDis =(actions.payload)

    if(state.usersList.length === 0) {
      window.alert("Not Registered ..... please Register and Login Again")
      // navigate("/register")
    } 
    // else {
      // let logged = state.usersList.find( myus => myus.email == user.email && myus.password  == user.password) ;
    //   if(logged){
    //     // localStorage.setItem("loggedUser" , JSON.stringify(user));
    // alert("Login successfull......!")
    //     // navigate("/");
    
    //   }
      else{
        window.alert("Not Registered ..... please Register and Login Again");
        // navigate("/register")
      }
    // }
      console.log(input)
     let finaloutput =  actions.payload.find((e)=> e.constiuencies.indexOf(input) > -1)
     return finaloutput;

    default:
      return state.usersList;
  }
};
