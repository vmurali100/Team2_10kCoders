let employee = [
  {
    id: 21,
    email: "JLee@sagittis.gov",
    username: "BWesley",
    password: "pDbrx",
  },
  {
    id: 22,
    email: "KCobb@dolor.io",
    username: "TSeymour",
    password: "AWxUd",
  },
  {
    id: 23,
    email: "TOliva@donec.org",
    username: "JRodenberger",
    password: "1GBkP",
  },
  {
    id: 24,
    email: "MLubold@consectetur.org",
    username: "SMixon",
    password: "PMrvG",
  },
  {
    id: 25,
    email: "LDaniel@facilisis.net",
    username: "MCoe",
    password: "vJ6XS",
  },
  {
    id: 26,
    email: "DPepin@non.io",
    username: "VDemeritt",
    password: "SoJEv",
  },
  {
    id: 27,
    email: "AEkekwe@sit.net",
    username: "AHettrick",
    password: "hdmGY",
  },
  {
    id: 28,
    email: "KRydinsky@tortor.gov",
    username: "DBussey",
    password: "CtJA8",
  },
  {
    id: 29,
    email: "VLongmire@aliquam.ly",
    username: "AMcwhorter",
    password: "uEnQ5",
  },
  {
    id: 30,
    email: "JRehrig@sed.net",
    username: "TFederico",
    password: "zkytV",
  },
];
const data = {
    employee
} 
const Reducer = (state = data , action)=>{
const {type} = action 

switch (type) {
    case "GET_EMPLOYEE":
        return state.employee
    
    default:
      return state
}
}
export default Reducer