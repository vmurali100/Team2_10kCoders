let name = [
  {
    fname: "Kantanzia",
    lname: "Pfeiffer",
  },
  {
    fname: "Damon",
    lname: "Lowe",
  },
  {
    fname: "Shelly",
    lname: "Pachler",
  },
  {
    fname: "Vicky",
    lname: "Dobbins",
  },
  {
    fname: "Graeme",
    lname: "Johns",
  },
  {
    fname: "Ingrid",
    lname: "Bell",
  },
  {
    fname: "Waleska",
    lname: "Lopez",
  },
  {
    fname: "Marilynn",
    lname: "Mathis",
  },
  {
    fname: "Tasha",
    lname: "Hough",
  },
  {
    fname: "Yolanda",
    lname: "Pfeifer",
  },
];

const data = {
    name
}

const Reducer = (state = data ,action) =>{
    switch (action.type) {
        case "GET_NAME":
            return state.name
    
        default:
            return state
    }
}
export default  Reducer