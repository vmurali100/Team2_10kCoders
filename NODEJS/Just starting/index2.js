const {sayHello,person} = require("./index")

const fs = require("fs")

// fs.writeFile("db.json",JSON.stringify(person),()=>{
//     console.log("File Created")
// })

fs.readFile('./db.json',"utf8",(err,data)=>{
    console.log("Reading File",data)
})

