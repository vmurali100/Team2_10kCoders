const fs = require('fs')

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

fs.readFile('./db.json','utf8',(err,data)=>{
    console.log(JSON.parse(data))
})
// fs.writeFile('db.json',JSON.stringify(person),()=>{
//     console.log("File Created")
// })