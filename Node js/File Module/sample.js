const fs = require("fs")
var person={
    message:"Hello from person Object",
    address:{
        "street":"Mustafanagar",
        "city":"khammam",
        "dist":"Telangana"
    },
    users:["hari",'giri']
}
fs.writeFile("db.json",JSON.stringify(person),()=>{
    console.log("File Created")
})