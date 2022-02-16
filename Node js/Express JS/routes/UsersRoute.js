const express = require("express")
let app= express.Router()
const fs=require("fs")
const { parse } = require("path")

app.get("/",(req,res)=>{
    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        res.send({users:JSON.parse(data)});
    })
})

app.post("/createUser",(req,res)=>{
    let users=req.body
    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        let newUsers=JSON.parse(data)
        newUsers.push(users)
        fs.writeFile("./routes/users.json",JSON.stringify(newUsers),()=>{
            res.send({users:newUsers});

        })
    })
})

app.delete("/:id",(req,res)=>{
    let id=req.params.id
    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        let newUsers=JSON.parse(data).filter((user)=>user.id != id)
        
        fs.writeFile("./routes/users.json",JSON.stringify(newUsers),()=>{
            res.send({users:newUsers});

        })
    })
})

app.put("/updateUser/:id",(req,res)=>{
    let id=req.params.id
    let user=req.body
    console.log(id)
    console.log(user)

    fs.readFile("./routes/users.json","utf8",(err,data)=>{
        let newUsers=JSON.parse(data)

        newUsers.forEach((ns,i)=>{
            console.log(ns)
            if(ns.id==id){
                newUsers[i]=user
            }
        })
        fs.writeFile("./routes/users.json",JSON.stringify(newUsers),()=>{
            res.send({users:newUsers});

        })
    })

})

module.exports=app


