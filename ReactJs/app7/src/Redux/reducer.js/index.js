let students = [
    {
        "fname": "Arlene",
        "lname": "Landrum",
        "tel": "(118)969-7644",
        "address": "6567 Etiam Ct",
        "city": "Snellville",
        "state": "AZ",
        "zip": 27286
    },
    {
        "fname": "Elmer",
        "lname": "Compton",
        "tel": "(405)450-2034",
        "address": "5763 Vitae Rd",
        "city": "Issaquah",
        "state": "SD",
        "zip": 72755
    },
    {
        "fname": "Dante",
        "lname": "Silverstein",
        "tel": "(926)515-6306",
        "address": "9121 Placerat Ct",
        "city": "Madison",
        "state": "KS",
        "zip": 33093
    },
    {
        "fname": "Shanna",
        "lname": "Catania",
        "tel": "(745)937-2197",
        "address": "109 Odio Dr",
        "city": "Kingsley",
        "state": "SC",
        "zip": 35270
    },
    {
        "fname": "Herbert",
        "lname": "Ratchawongsa",
        "tel": "(330)895-1335",
        "address": "5444 Porta Rd",
        "city": "Pine Mountain",
        "state": "OH",
        "zip": 27394
    },
    {
        "fname": "Dwayne",
        "lname": "Lang",
        "tel": "(534)339-6273",
        "address": "5280 Augue St",
        "city": "Lititz",
        "state": "WY",
        "zip": 30209
    },
    {
        "fname": "Polina",
        "lname": "Heppelmann",
        "tel": "(413)996-0738",
        "address": "6317 Amet Ln",
        "city": "South Denver",
        "state": "IA",
        "zip": 95546
    },
    {
        "fname": "Despina",
        "lname": "Cattanach",
        "tel": "(442)352-2643",
        "address": "9114 Nullam Ln",
        "city": "Bridgewater",
        "state": "NH",
        "zip": 10747
    },
    {
        "fname": "Halina",
        "lname": "Malstrom",
        "tel": "(854)178-0708",
        "address": "5587 Amet Ave",
        "city": "Coeur D'alene",
        "state": "NH",
        "zip": 60986
    },
    {
        "fname": "Vickie",
        "lname": "Penty",
        "tel": "(584)007-9223",
        "address": "677 Ipsum St",
        "city": "Georgetown",
        "state": "SC",
        "zip": 81584
    }
]
const defaultdata ={
    students
}

function rootReducer(state=defaultdata,action){
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return state
       
        default:
            return state
    }
}
export default rootReducer
