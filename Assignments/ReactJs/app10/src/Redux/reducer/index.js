var api1data = [
    {
        "id": 411,
        "email": "CRadist@lacus.gov",
        "username": "FRaj",
        "password": "dn1DR"
    },
    {
        "id": 412,
        "email": "KFranklin@nec.gov",
        "username": "DAmick",
        "password": "sPHse"
    },
    {
        "id": 413,
        "email": "AKeltner@curabitur.org",
        "username": "SChew",
        "password": "gITF4"
    },
    {
        "id": 414,
        "email": "INey@dolor.net",
        "username": "KHalligan",
        "password": "vH8m7"
    },
    {
        "id": 415,
        "email": "AGorski@elit.io",
        "username": "FMaurer",
        "password": "PN9jo"
    },
    {
        "id": 416,
        "email": "GRay@vitae.gov",
        "username": "SGilberto",
        "password": "7SqwT"
    },
    {
        "id": 417,
        "email": "KFlores@tellus.net",
        "username": "THoffman",
        "password": "bXyN7"
    },
    {
        "id": 418,
        "email": "RBristow@elit.ly",
        "username": "SComeau",
        "password": "UCsAa"
    },
    {
        "id": 419,
        "email": "AHunter@aliquam.org",
        "username": "DHall",
        "password": "DVcA4"
    },
    {
        "id": 420,
        "email": "MCantu@dolor.com",
        "username": "JLandosky",
        "password": "XOBOJ"
    }
]
var api2data = [
    {
        "fname": "Lola",
        "lname": "Woolverton",
        "tel": "(644)734-2210",
        "address": "8463 Odio Ave",
        "city": "Lafayette",
        "state": "KY",
        "zip": 34954
    },
    {
        "fname": "Segun",
        "lname": "Allshouse",
        "tel": "(371)628-4460",
        "address": "6391 Malesuada Rd",
        "city": "Furlong",
        "state": "DC",
        "zip": 96058
    },
    {
        "fname": "David",
        "lname": "Cattanach",
        "tel": "(486)355-0959",
        "address": "7328 Dui Dr",
        "city": "Knightdale",
        "state": "ID",
        "zip": 83698
    },
    {
        "fname": "Chareese",
        "lname": "Dellinger",
        "tel": "(535)737-1294",
        "address": "5939 Pulvinar St",
        "city": "Winter Garden",
        "state": "MS",
        "zip": 39570
    },
    {
        "fname": "Ty",
        "lname": "Flamme",
        "tel": "(431)358-7037",
        "address": "7875 Mattis Ln",
        "city": "Galveston",
        "state": "OR",
        "zip": 67376
    },
    {
        "fname": "Felicia",
        "lname": "Borrego",
        "tel": "(346)463-0496",
        "address": "392 Tortor Rd",
        "city": "Middletown",
        "state": "WI",
        "zip": 89170
    },
    {
        "fname": "Tim",
        "lname": "Lyden",
        "tel": "(150)806-5554",
        "address": "5507 Sit Ave",
        "city": "Bellefonte",
        "state": "RI",
        "zip": 39827
    },
    {
        "fname": "Abraham",
        "lname": "Roy",
        "tel": "(759)824-3241",
        "address": "5166 Sollicitudin Ave",
        "city": "Kyle",
        "state": "FL",
        "zip": 91743
    },
    {
        "fname": "Safiyyah",
        "lname": "Mcgrath",
        "tel": "(886)167-9663",
        "address": "2892 Magna Ln",
        "city": "Sin City",
        "state": "MI",
        "zip": 24557
    },
    {
        "fname": "Stanley",
        "lname": "Sundell",
        "tel": "(539)637-9025",
        "address": "9543 Fringilla Ln",
        "city": "Queen Creek",
        "state": "CO",
        "zip": 31756
    }
]
const defData ={
    api1data,
    api2data
}

function rootReducer(state=defData,action){
    switch (action.type) {
        case "API_DATA":
            
            break;
    
        default:
            return state
    }
}
export default rootReducer