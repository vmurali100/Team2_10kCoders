let filltext1=[
    {
        "fname": "Myrna",
        "lname": "Chamberlain"
    },
    {
        "fname": "Ericka",
        "lname": "Altermatt"
    },
    {
        "fname": "Haytham",
        "lname": "Delatorre"
    },
    {
        "fname": "Dmitry",
        "lname": "Holcombe"
    },
    {
        "fname": "Bonnie",
        "lname": "Marks"
    },
    {
        "fname": "Jaroslava",
        "lname": "Walls"
    },
    {
        "fname": "Richard",
        "lname": "Clagg"
    },
    {
        "fname": "Dainius",
        "lname": "Lukenbill"
    },
    {
        "fname": "Holli",
        "lname": "Clifford"
    },
    {
        "fname": "Regine",
        "lname": "Barrow"
    }
]
const data={
    filltext1
}
const userReducer=(state=data,action)=>{
    const type={
        action
    }
    switch(type){
        case "GET_FILLTEXT1":
            return state.fname
            default:
                return state
    }
}
export default userReducer