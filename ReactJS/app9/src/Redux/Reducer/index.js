let  members = [
    {
        "id": 682,
        "email": "CBurrs@ante.ly",
        "username": "MPento",
        "password": "xiTSS"
    },
    {
        "id": 683,
        "email": "KSwanson@tortor.org",
        "username": "SRoy",
        "password": "8QyHh"
    },
    {
        "id": 684,
        "email": "CMerkel@scelerisque.org",
        "username": "BCole",
        "password": "AXTtf"
    },
    {
        "id": 685,
        "email": "AWeiler@sed.io",
        "username": "PMcalevey",
        "password": "mdzgO"
    },
    {
        "id": 686,
        "email": "SKamradt@et.io",
        "username": "GBergin",
        "password": "sNbfF"
    },
    {
        "id": 687,
        "email": "VNash@porttitor.gov",
        "username": "NBoblett",
        "password": "Ol8sa"
    },
    {
        "id": 688,
        "email": "MZehnacker@dolor.io",
        "username": "TBrill",
        "password": "lif2R"
    },
    {
        "id": 689,
        "email": "HEverly@ipsum.io",
        "username": "THale",
        "password": "Et9SB"
    },
    {
        "id": 690,
        "email": "LOrtiz@id.com",
        "username": "DWilliams",
        "password": "T3ozn"
    },
    {
        "id": 691,
        "email": "RTraverse@magna.com",
        "username": "CTarbox",
        "password": "8xXXG"
    }
]

const mdata = {members}
const Reducer = (state=mdata,action)=>{
 const {type} = action
 switch(type){
    case "GET_MEMBER":

    return state.members
    default:
        return state;
 }
}

export default Reducer