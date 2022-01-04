const Reducer3 = (state,action)=>{
const {type} = action

switch (type) {
    case "FILLTEXT" :{
        return "AM FROM FILLTEXT "
    }
    case "FAKESTORE" :{
        return "AM FROM FAKESTORE "
    }
    case "JSON" :{
        return "AM FROM JSON "
    }
}
}
export default Reducer3 