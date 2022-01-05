const mystate = {
  students : ["akhil" , "akhilvm" , "ajay" , "harish"] ,
  items : ["tool" , "pad" ,"mixer"] ,
  cart : ["shirt" , "pant" , "jacket"] ,
  products : ['oil' , 'sugar' , 'teapowder']
}

function Reducer (state = mystate, action) {
  switch (action.type) {
    case "Students_Data": {
      return state.students;
    }

    case "Items_Data": {
      return state.items
    }
    case "Cart_Data": {
      return state.cart
    }
    case "Products_Data": {
      return state.products
    }
    default :
    return state
  }
};
export default Reducer
