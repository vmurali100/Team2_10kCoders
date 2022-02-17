const {sayHello,person} = require("./index")
const fs = require("fs")
sayHello("Passing this msg")
fs.writeFile("db.json",JSON.stringify(person),()=>{
    console.log("File Created")
})


