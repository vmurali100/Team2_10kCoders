

const Reducer = (state ,action) => {
  switch (action.type) {
    case "Students_Data": {
      return "hey students";
    }

    case "Items_Data": {
      return "hey items";
    }
    case "Cart_Data": {
      return "hey Cart";
    }
    case "Products_Data": {
      return "hey products";
    }
    default :
    return "heyyyyyyy"
  }
};
export  default Reducer
