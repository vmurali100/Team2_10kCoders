const express = require('express');
const app = express()
var bodyParser = require('body-parser')

const port = 3000;

const usersRoute = require('./routes/UsersRoute')

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send({msg:"Hello from Express JS"})
})

app.use("/users",usersRoute)

app.get("/products",(req,res)=>{
    res.send({msg:"Hello From Produsts API"})
})

app.listen(port,()=>{
    console.log("Server Started at 3000!")
})

