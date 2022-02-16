const express=require("express");
const app=express()
const bodyParser = require('body-parser')
const port=3000;
const usersRoute=require("./routes/UsersRoute")

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send({msg:"hello from Express JS"})
})

app.use('/users',usersRoute)

app.get("/products",(req,res)=>{
    res.send({msg:"Hello from Products API"})
}) 
app.listen(port,()=>{
    console.log("Server started at 3000 port")
})
