const mystate = {
  one: ["1", "2", "3", "4", "5", "6"],
  two: ["a", "b ", "c", "d"],
  three: "hey am from three",
};

const NumbersReducer = (state = mystate, action) => {
 
  switch (action.type) {
    case "Get_One": {
      return state.one;
    }
    case "Get_Two": {
      return state.two;
    }
    case "Get_Three": {
      return state.three;
    }
    case "Get_Four": {
      return "number four ";
    }
    default: {
      return "infinity";
    }
  }
};
export default NumbersReducer;
