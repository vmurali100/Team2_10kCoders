let filltext3=[
    {
        "id": 1,
        "email": "EBean@eget.org",
        "username": "BKrynsky",
        "password": "QxPT8"
    },
    {
        "id": 2,
        "email": "ASaadeh@sit.ly",
        "username": "TStutzman",
        "password": "kbOWv"
    },
    {
        "id": 3,
        "email": "MSolomon@convallis.io",
        "username": "HMarin",
        "password": "Mhjm6"
    },
    {
        "id": 4,
        "email": "JRomard@tempor.com",
        "username": "NHougland",
        "password": "CmMpQ"
    },
    {
        "id": 5,
        "email": "JSalval@mattis.ly",
        "username": "CLogsden",
        "password": "d8ugx"
    },
    {
        "id": 6,
        "email": "BLieb@curabitur.io",
        "username": "FCates",
        "password": "AX4sS"
    },
    {
        "id": 7,
        "email": "RChristopher@lacus.ly",
        "username": "JHancock",
        "password": "NVKMz"
    },
    {
        "id": 8,
        "email": "DZavala@vel.net",
        "username": "DLongmire",
        "password": "krL5J"
    },
    {
        "id": 9,
        "email": "AFenton@nullam.net",
        "username": "DLarrabee",
        "password": "sZLVc"
    },
    {
        "id": 10,
        "email": "TZiniel@vitae.gov",
        "username": "EBrady",
        "password": "X8ZjK"
    }
]
const data={
    filltext3
}
const userReducer=(state=data,action)=>{
    const type={
        action
    }
    switch(type){
        case "GET_FILLTEXT3":
            return state.email
            default:
                return state
    }
}
export default userReducer