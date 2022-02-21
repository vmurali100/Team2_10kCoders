var express = require('express');
var router = express.Router();
var User = require('../Models/user')
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond From Users API');
});

router.post('/register', async function (req, res, next) {
  let Reguser = req.body;


  let registerUser = await User.findOne({ username: req.body.username });
  console.log("Came to Register", registerUser)

  if (registerUser === null) {
    let user = new User({
      username: req.body.username,
      password: req.body.password
    })
    let info = await user.save();
    res.send('respond from register API');
  } else {
    res.send('User Already Exist ');

  }
});

router.post('/login', async function (req, res, next) {
  let loginUser = await User.findOne({ username: req.body.username });

  if(loginUser === null){
    res.send('Authentication Failed');

  }else{
    var token = jwt.sign({ username: req.body.username,password:req.body.password }, 'secretKey');
    res.send({msg:"User Logged In ", token});

  }
});
module.exports = router;
