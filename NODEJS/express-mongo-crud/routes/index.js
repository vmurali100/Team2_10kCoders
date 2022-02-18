const express = require("express")
const app = express()
const port =  3000

app.listen(port,()=>{
  console.log({msg:"Server started at 3000"})
})

app.get("/",(req,res)=>{
  res.send({msg:"This is Default Page"})
})