const express = require("express")
const app = express()
const port =  3000

const usersRoute = require("./routes/UsersRoute")
const productRoute = require("./routes/ProductsRouter")

var bodyParser = require("body-parser")
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log({msg:"Server Staretd at 3000"})
})

app.get("/",(req,res)=>{
    res.send({msg:"Hello From Express JS"})
})

app.use("/users",usersRoute)

app.use("/products",productRoute)



