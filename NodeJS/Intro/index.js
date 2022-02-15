
var person ={
    message:"Hello From Person Object",
    address:{
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      users:["Murali","Krishna","Ram"]
}

function sayHello(message) {
    console.log(message)
}

module.exports = {
    myFunc :sayHello,
    myPerson, person}