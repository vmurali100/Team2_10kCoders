import { combineReducers } from "redux";
import NumbersReducer from "../../Redux2/Reducer";

const mystate = {
    ceo:[{
        name: "akvm" ,
        age : 26 ,
        zip : 500001 
    }] ,
    manager:[{
        name:"varma" ,
        age: 25 ,
        area : "wgl" ,
        zip : 506001 
    }] ,
    employee :["ajay" ,"akhil" , "harish"]
}


const  Reducer  = (state = mystate , action) =>{
    const {type} = action ; 

    switch (type) {
        case "Employee" : {
            return state.employee
        }
        case "Manager" : {
            return state.manager
        }
        case "Ceo" : {
            return state.ceo
        }
        default :
        return state
    }
}
//  const Rootreducer = combineReducers({
//      employee: EmployeeReducer ,
//      numbers : NumbersReducer,
//  })
 export default Reducer