
let Employee = [
    {
        "fname": "Yiping",
        "lname": "Brewer",
        "tel": "(666)370-3493",
        "address": "4425 Nullam Ave",
        "city": "Johnsburg",
        "state": "NY",
        "zip": 17773
    },
    {
        "fname": "Jaime",
        "lname": "Cummings",
        "tel": "(990)417-5062",
        "address": "8246 Magna Ct",
        "city": "Palm Beach Gardens",
        "state": "NE",
        "zip": 44357
    },
    {
        "fname": "Elmer",
        "lname": "Duffy",
        "tel": "(269)607-7934",
        "address": "2819 In Ln",
        "city": "Rachel",
        "state": "IN",
        "zip": 93299
    },
    {
        "fname": "Jacquie",
        "lname": "Glean",
        "tel": "(828)397-0939",
        "address": "936 Hendrerit St",
        "city": "Lake Lillian",
        "state": "NH",
        "zip": 39852
    },
    {
        "fname": "Danny",
        "lname": "Gladue",
        "tel": "(154)045-3782",
        "address": "6432 Turpis St",
        "city": "Redondo Beach",
        "state": "LA",
        "zip": 92044
    },
    {
        "fname": "Vijayakumar",
        "lname": "Ruback",
        "tel": "(342)602-4236",
        "address": "3854 Augue Ave",
        "city": "Tobyhanna",
        "state": "AZ",
        "zip": 43278
    },
    {
        "fname": "Chad",
        "lname": "Sergent",
        "tel": "(996)771-1612",
        "address": "4860 Sed Ct",
        "city": "Hagerstown",
        "state": "NV",
        "zip": 15607
    },
    {
        "fname": "Jay",
        "lname": "Fogle",
        "tel": "(840)101-2845",
        "address": "3951 Adipiscing Rd",
        "city": "Port Ewen",
        "state": "KY",
        "zip": 55438
    },
    {
        "fname": "Rocelyn",
        "lname": "Jeschke",
        "tel": "(772)741-1546",
        "address": "7876 Lacus Ct",
        "city": "Kalamazoo",
        "state": "FL",
        "zip": 87800
    },
    {
        "fname": "Martha",
        "lname": "Toffoli",
        "tel": "(272)671-4195",
        "address": "3242 Scelerisque Ct",
        "city": "Central Lake",
        "state": "NJ",
        "zip": 74912
    }
]

const Details = {Employee};

const Reducer = (state=Details,action)=>{
    const {type} = action;
    switch (type) {
        case "GET_EMPLOYEE":
           return state.Employee;
        default:
           return state;
    }

}
export default Reducer