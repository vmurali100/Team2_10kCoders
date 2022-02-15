const express=require("express");
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.send({msg:"hello from Express JS"})
})

app.get('/users',(req,res)=>{
    res.send({users})
})

app.get("/products",(req,res)=>{
    res.send({msg:"Hello from Products API"})
})
app.listen(port,()=>{
    console.log("Server started at 3000 port")
})

let users=[
    {
        "id": 1,
        "email": "SWaters@placerat.net",
        "username": "DKelley",
        "password": "Avzv2"
    },
    {
        "id": 2,
        "email": "DHolden@donec.com",
        "username": "LKentro",
        "password": "R0U51"
    },
    {
        "id": 3,
        "email": "MRichards@aliquam.net",
        "username": "MHackman",
        "password": "Q312H"
    },
    {
        "id": 4,
        "email": "ELiso@ac.net",
        "username": "KAlbright",
        "password": "dIWYB"
    },
    {
        "id": 5,
        "email": "RKeltner@etiam.org",
        "username": "TChang",
        "password": "6RPGx"
    },
    {
        "id": 6,
        "email": "GMitchell@sit.gov",
        "username": "EOrmond",
        "password": "5af6L"
    },
    {
        "id": 7,
        "email": "GPearlstein@dolor.net",
        "username": "MNance",
        "password": "Lydnq"
    },
    {
        "id": 8,
        "email": "LKhillah@sed.ly",
        "username": "JRodriguez",
        "password": "kGa9Z"
    },
    {
        "id": 9,
        "email": "CWoode@tortor.org",
        "username": "AKrout",
        "password": "War2e"
    },
    {
        "id": 10,
        "email": "EKnutson@et.net",
        "username": "KMel",
        "password": "wbl2w"
    }
]