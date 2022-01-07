const defaultData = {
     users:["welcome"],
    persons:["hello123","world"],
    product:["saranya","saru"],
    students:{fname:"hello",lname:"welcome"},
    message:"this is redux"
  };
  
  
  export default function rootReducer(state = defaultData, action) {
    switch (action.type) {
      case "GET_ALL_STUDETS":
        return state.persons;
  
      case "GET_ALL_PRODUCTS":
        return state.product;

      case "GET_ALL_USERS":
          return state.users;
      
      case "GET_ALL_STUDENTS":
            return state.students;
  
      case "GET_ALL_MESSAGE":
              return state.message;
  
      default:
        return state;
    }
  }
  