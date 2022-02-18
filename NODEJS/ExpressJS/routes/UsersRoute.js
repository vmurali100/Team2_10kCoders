const { json } = require("express")
const express = require("express")
let app = express.Router()
const fs = require("fs")

 

app.get("/",(req,res)=>{
    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        res.send({users:JSON.parse(data)})
    })
})

app.delete("/:id",(req,res)=>{
    let id = req.params.id
    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        let Users = JSON.parse(data)
        let newusers =  Users.filter((user)=> user.id != id)
        fs.writeFile("./routes/users.json",JSON.stringify(newusers),()=>{
            res.send({newusers})
        })
    })
})

app.post("/createuser",(req,res)=>{
    let user = req.body
    fs.readFile('./routes/users.json',"utf8",(err,data)=>{
        let newusers = JSON.parse(data)
        newusers.push(user)
        fs.writeFile("./routes/users.json",JSON.stringify(newusers),()=>{
            res.send({newusers})
        })
    })
})

app.put("/updateuser/:id",(req,res)=>{
    let id = req.params.id
    let user = req.body
    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        let newusers = JSON.parse(data)
        newusers.forEach((ns,i)=>{
            if(ns.id == id){
                newusers[i] = user
            }
        })
        fs.writeFile("./routes/users.json",JSON.stringify(newusers),()=>{
            res.send({newusers})
        })
    })
})

module.exports = app