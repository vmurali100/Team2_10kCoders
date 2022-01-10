let filltext2=[
    {
        "fname": "Esmeralda",
        "lname": "Mendiola",
        "tel": "(251)131-6407",
        "address": "745 Hendrerit Rd",
        "city": "Hewitt",
        "state": "CO",
        "zip": 29884
    },
    {
        "fname": "Carmen",
        "lname": "Hughes",
        "tel": "(259)549-8499",
        "address": "940 Nec Ln",
        "city": "Fort Bragg",
        "state": "AL",
        "zip": 38722
    },
    {
        "fname": "Todd",
        "lname": "Schoenbauer",
        "tel": "(518)697-4754",
        "address": "7427 Odio Ave",
        "city": "Atwater",
        "state": "NM",
        "zip": 63184
    },
    {
        "fname": "Bernadette",
        "lname": "Hess",
        "tel": "(116)069-2731",
        "address": "5208 Massa Ave",
        "city": "El Dorado Hills",
        "state": "NJ",
        "zip": 42037
    },
    {
        "fname": "Louis",
        "lname": "Glynn",
        "tel": "(470)933-5931",
        "address": "4348 In St",
        "city": "Redondo Beach",
        "state": "AK",
        "zip": 32453
    },
    {
        "fname": "Sonja",
        "lname": "Langille",
        "tel": "(114)608-3137",
        "address": "1949 Ipsum Ave",
        "city": "Lake Lillian",
        "state": "OR",
        "zip": 35618
    },
    {
        "fname": "Dora",
        "lname": "Flamme",
        "tel": "(373)472-7988",
        "address": "2016 Lacus Dr",
        "city": "Olive Branch",
        "state": "IL",
        "zip": 35146
    },
    {
        "fname": "Cesalie",
        "lname": "Crewell",
        "tel": "(780)132-2278",
        "address": "8311 Sagittis Ct",
        "city": "Winona Lake",
        "state": "WI",
        "zip": 88691
    },
    {
        "fname": "Kehinde",
        "lname": "Burkes",
        "tel": "(365)935-7844",
        "address": "5351 Massa Ave",
        "city": "Carolina Beach",
        "state": "FL",
        "zip": 83776
    },
    {
        "fname": "Cathleen",
        "lname": "Krasowski",
        "tel": "(341)156-1120",
        "address": "6409 Eget Rd",
        "city": "Kelso",
        "state": "WV",
        "zip": 90635
    }
]
const data={
    filltext2
}
const userReducer=(state=data,action)=>{
    const type={
        action
    }

switch(type){
    case "GET_FILLTEXT2":
        return state.address
        default:
            return state
}
}
export default userReducer