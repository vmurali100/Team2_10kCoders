let name = [
    {
        "fname": "Jireh",
        "lname": "Clark"
    },
    {
        "fname": "Olena",
        "lname": "Lazier"
    },
    {
        "fname": "Michael",
        "lname": "Nemichand"
    },
    {
        "fname": "Blake",
        "lname": "Lyn"
    },
    {
        "fname": "Polina",
        "lname": "Speer"
    },
    {
        "fname": "Misty",
        "lname": "Ward"
    },
    {
        "fname": "Rabiah",
        "lname": "Gilby"
    },
    {
        "fname": "Arun",
        "lname": "Easterly"
    },
    {
        "fname": "Homma",
        "lname": "Warren"
    },
    {
        "fname": "Janis",
        "lname": "Frame"
    }
]
  
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