const  Reducer  = (state , action) =>{
    const {type} = action ; 

    switch (type) {
        case "Employee" : {
            return "hey employeee"
        }
        case "Manager" : {
            return "hey manager"
        }
        case "Ceo" : {
            return "hey Ceo"
        }
        default :
        return "hey all"
    }
}
export default  Reducer 