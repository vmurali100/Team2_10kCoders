const express = require('express')
let app = express.Router();
const fs = require('fs');
var mongoose = require("mongoose");
var User = require('../Models/user')


app.get('/',async(req,res)=>{
    let allUsers = await User.find()
    res.send({users:allUsers})
});

app.post('/createUser', async (req, res) => {

    let user = new User({
        fname:req.body.fname,
        lname:req.body.lname
    })

    let savedUser = await user.save();
    console.log("savedUser",savedUser);
    res.send({msg:"User Added Successfully ",savedUser})
   
})
app.delete('/:id', async(req, res) => {
    let id = req.params.id
    let myUser = await User.findByIdAndDelete({_id:id})
    res.send({users:myUser})

})

app.put('/updateUser/:id', async(req, res) => {
    let id = req.params.id
    let user = req.body
    let updateUser = await User.findByIdAndUpdate(id,user)
    res.send({user:updateUser})

})
module.exports = app

