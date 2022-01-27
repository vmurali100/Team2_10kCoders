const defaultData1 = {
  users:[],
  students:["Teja","Raja"],
  products:[]
}
export default function rootReducer(state1=defaultData1,action) {
    switch (action.type) {
      case "GET_ALL_STUDETS":
        return state1.students
  
      case "GET_ALL_PRODUCTS":
        return state1.products
     
  
      default:
        return state1
    }
  }