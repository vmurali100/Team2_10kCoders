const defaultData = {
    users: [],
    Employesss :["Ram","Srikanth","Nidadavolu","Sateesh"],
    Sweepers:[]
  };
  
  export default function rootReducer(state = defaultData, action) {
    switch (action.type) {
      case "GET_ALL_Employess":
        return state.students;
  
      case "GET_ALL_Sweepers":
        return state.products;
  
      default:
        return state;
    }
  }