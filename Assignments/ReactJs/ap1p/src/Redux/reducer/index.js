const defaultdata = {
    cricketPlayers:["Sachin","Virat Kohli","Mahendra Dhoni"],
    footballPlayers:[]
}

function rootReducer(state,actions){
    switch (actions.type){
        case  "GET_ALL_CRICKETERS":
            return state.cricketPlayers
        case "GET_ALL_FOOTBALLERS":
            return state.footballersfootballers
        default:
            return state
    }
}
export default rootReducer