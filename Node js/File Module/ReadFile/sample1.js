const fs = require("fs")
const { stringify } = require("querystring")
var person={
    message:"Hello from person Object",
    address:{
        "street":"Mustafanagar",
        "city":"khammam",
        "dist":"Telangana"
    },
    users:["hari",'giri']
}
fs.readFile("./db.json","utf8",(err,data)=>{
    console.log(JSON.parse(data))
})