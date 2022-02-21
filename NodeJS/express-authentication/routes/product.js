var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Product = require('../Models/product')

/* GET home page. */
router.get('/',validate, function (req, res, next) {
    res.send({ msg: "Get All Products" });
});

router.post('/createProduct',validate, async function (req, res, next) {
    var product = new Product({
        prodName:req.body.prodName,
        prodPrice:req.body.prodPrice
    })
    let savedProduct = await product.save()
    res.send({ msg: "Product Created",savedProduct });
});

router.delete('/deleteProduct/:id',validate, async function (req, res, next) {
    let id = req.params.id
    let deleteProduct = await Product.findByIdAndDelete({_id:id})
    res.send({ msg: "Product deleted",deleteProduct });
});

router.put('/updateProduct/:id',validate, async  function (req, res, next) {
    let id = req.params.id
    let updateProduct = await Product.findByIdAndUpdate(id,{
        prodName:req.body.prodName,
        prodPrice:req.body.prodPrice
    })
    res.send({ msg: "Product Updated",updateProduct });
});

// Authentation with Middle Ware
async function validate(req, res, next){
     try {
        let check = await jwt.verify(req.headers.token,'secretKey')
        next()
    } catch (error) {
        res.send({msg:"Validation Failed"})
   }
    

}

module.exports = router;
