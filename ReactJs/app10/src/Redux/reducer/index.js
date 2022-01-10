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
const defData ={
    api1data
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