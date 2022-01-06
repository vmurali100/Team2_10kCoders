let emp =[
    {
        "id": 3001,
        "email": "GLarson@dolor.gov",
        "username": "PMalmfeldt",
        "password": "JumBU"
    },
    {
        "id": 3002,
        "email": "RBarrick@dolor.io",
        "username": "THerbert",
        "password": "o9BpO"
    },
    {
        "id": 3003,
        "email": "TVelasco@libero.net",
        "username": "ABuckaloo",
        "password": "qD1C3"
    },
    {
        "id": 3004,
        "email": "CMiljour@dolor.net",
        "username": "YPfaff",
        "password": "9vJro"
    },
    {
        "id": 3005,
        "email": "EKey@nec.com",
        "username": "AKhillah",
        "password": "taXqb"
    },
    {
        "id": 3006,
        "email": "TBergin@velit.org",
        "username": "SChristiansen",
        "password": "Kx9Br"
    },
    {
        "id": 3007,
        "email": "TBlackwell@malesuada.org",
        "username": "CBenjamin",
        "password": "Z7szY"
    },
    {
        "id": 3008,
        "email": "JBand@libero.ly",
        "username": "JPierce",
        "password": "huJyf"
    },
    {
        "id": 3009,
        "email": "GKnight@convallis.ly",
        "username": "ADeals",
        "password": "maHDN"
    },
    {
        "id": 3010,
        "email": "AVanburen@sed.ly",
        "username": "VMcclamroch",
        "password": "YeVh5"
    }
]

    const data ={
        emp
    }

    const EmpReducer = (state=data,action)=>{

        switch (action.type) {
            case "GET_DATA" :
                return state.emp
                        
            default:
                return state
        }
    }

    export default EmpReducer