
var person={
    message:"Hello from person Object",
    address:{
        "street":"Mustafanagar",
        "city":"khammam",
        "dist":"Telangana"
    },
    users:["hari",'giri']
}

function sayHello(message)  {
    console.log(message)
}
module.exports = {sayHello,myperson:person.users}