const mystate = {
    ceo:[] ,
    manager:[] ,
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
export default  Reducer 