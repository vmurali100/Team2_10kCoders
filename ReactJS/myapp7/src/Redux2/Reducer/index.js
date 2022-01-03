const Reducer2 = (state , action) =>{
const {type} = action ;
switch (type) {
    case "One" :{
        return "number one "
    }
    case "Two" :{
        return "number two "
    }
    case "Three" :{
        return "number three "
    }
    case "Four" :{
        return "number four "
    }
    default : {
        return "infinity"
    }
}
}
export default Reducer2 ;