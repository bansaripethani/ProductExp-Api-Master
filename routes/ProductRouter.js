const router = require("express").Router();
const Product = require("../models/Product");

router.post('/',function(req,res){
    console.log("Insert");
    console.log(req.body);

    var product1 = new Product({
        Name:req.body.Name,
        SKU:req.body.SKU,
        Price:req.body.Price,
        Quantity:req.body.Quantity
    });

    product1.save(function(err,product){
        if(err) return console.error(err);
        id = product._id;
        console.log(product._id + "Data Inserted");
        res.status(200).send(product);
    })
});

router.get("/",(req,res)=>{

    Product.find(function (err,products){
        if (err) return console.error(err);
  		console.log(products);
  		res.send(products);
    })
})

router.get("/:id",(req,res)=>{

    Product.findById({"_id":req.params.id},function (err,product){
        if (err) return console.error(err);
  		console.log(product);
  		res.send(product);
    })
})


router.put("/:id",(req,res)=>{

    Product.findByIdAndUpdate({"_id":req.params.id}, req.body, 
    {new: true}, function (err, product) {
    if (err) return res.status(500).send(
        "There was a problem updating.");
  		res.send(product);
    })
})

router.delete("/:id",(req,res)=>{

    Product.findOneAndDelete({"_id":req.params.id},function(err,product){
        if(err) return res.status(200).send(err)
        res.send(product);
    })
})
module.exports=router;