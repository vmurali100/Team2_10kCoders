const defData={
    user:[
        {
            "fname": "Marian",
            "lname": "Claudio"
        },
        {
            "fname": "Vaidas",
            "lname": "Mundie"
        },
        {
            "fname": "Vasilis",
            "lname": "Warren"
        },
        {
            "fname": "Roberto",
            "lname": "Waltz"
        },
        {
            "fname": "Emir",
            "lname": "Deos"
        },
        {
            "fname": "Derrick",
            "lname": "Steele"
        },
        {
            "fname": "Noopur",
            "lname": "Chamberlain"
        },
        {
            "fname": "Dennis",
            "lname": "Gerela"
        },
        {
            "fname": "Matthew",
            "lname": "Schoenbauer"
        },
        {
            "fname": "Kassaundra",
            "lname": "Levickis"
        }
    ]
}

function rootReducer(state=defData,action){
    switch (action.type) {
        case "CREATE_USER":
            let newUser = [...state]
            newUser.push(action.payload)
            return newUser
    
        default:
            
            return state.user
    }
}

export default rootReducer