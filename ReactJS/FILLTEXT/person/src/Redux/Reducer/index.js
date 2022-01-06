let personDetails = [
  {
    fname: "Harpal",
    lname: "Patino",
    tel: "(908)781-1861",
    address: "6817 Nec St",
    city: "Waterford",
    state: "NH",
    zip: 38115,
  },
  {
    fname: "Jeffery",
    lname: "Fruscione",
    tel: "(819)352-2501",
    address: "1173 Rutrum Ave",
    city: "Fayetteville",
    state: "NM",
    zip: 60373,
  },
  {
    fname: "Haytham",
    lname: "Mel",
    tel: "(481)359-7691",
    address: "7950 Donec St",
    city: "Beaumont",
    state: "CT",
    zip: 59872,
  },
  {
    fname: "Monique",
    lname: "Sayin",
    tel: "(715)945-1372",
    address: "8752 Sed Ln",
    city: "Derby",
    state: "FL",
    zip: 51636,
  },
  {
    fname: "Thelma",
    lname: "Bradley",
    tel: "(176)059-3918",
    address: "833 Elementum Rd",
    city: "Saint Louis",
    state: "UT",
    zip: 41740,
  },
  {
    fname: "Wyatra",
    lname: "Merle",
    tel: "(933)707-6520",
    address: "6536 Massa Dr",
    city: "Shrewsbury",
    state: "OH",
    zip: 34843,
  },
  {
    fname: "Teddy",
    lname: "Presas",
    tel: "(829)242-6953",
    address: "1354 Eget Rd",
    city: "Swanton",
    state: "KY",
    zip: 90188,
  },
  {
    fname: "Kadie",
    lname: "Halligan",
    tel: "(571)376-5218",
    address: "2264 Porttitor Rd",
    city: "Pharr",
    state: "UT",
    zip: 87544,
  },
  {
    fname: "Cenna",
    lname: "Morgan",
    tel: "(905)902-8912",
    address: "1309 Pretium Ave",
    city: "Forney",
    state: "DC",
    zip: 66517,
  },
  {
    fname: "Atul",
    lname: "Calliste",
    tel: "(206)701-1890",
    address: "4103 Mi Rd",
    city: "Indianapolis",
    state: "FL",
    zip: 73362,
  },
];
const bigData = {
    personDetails
}

const Reducer = ( state = bigData , action) =>{

 switch (action.type) {
     case "PERSON":
         return state.personDetails
 
     default:
         return state 
 }
}
export default Reducer