const Reducer2 = (state , action) =>{
const {type} = action ;
switch (type) {
    case "one" :{
        return "number one "
    }
    case "two" :{
        return "number two "
    }
    case "three" :{
        return "number three "
    }
    case "four" :{
        return "number four "
    }
    default : {
        return "infinity"
    }
}
}
export default Reducer2 ;