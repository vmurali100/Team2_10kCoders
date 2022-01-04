export default function rootReducer(state,action) {
    switch (action.type) {
      case "GET_ALL_STUDETS":
        return "Hello from ALL Studets";
  
      case "GET_ALL_PRODUCTS":
        return "Hello from ALL Products";
     
  
      default:
        return "HELLo"
    }
  }