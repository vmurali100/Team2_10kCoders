const fs = require('fs')
import sayHello from '.'


var person = {
    message:"hello hoe are you",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
        },
        users:["ram","bharat","krishna"]

}
// fs.writeFile('db.json',json.strigify("person"),()=>{
//     console.log("File Created")
// })

 fs.readFile('./db.json','utf-8',(err,data)=>{
    console.log(data)
})
console.log(sayHello)