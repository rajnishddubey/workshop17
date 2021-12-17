const router = require("express").Router();
const Product = require("../model/user");
const mongoose = require("mongoose");



router.post("/",(req,res)=>{
    try{
        const prod = new Product({
            id:req.body.id,
            productname:req.body.productname,
            price:req.body.price
        })
        prod.save()
        .then(result=>{
            res.status(200).json({
                all_data:result
            })
        })
        .catch(err=>{
            console.log(err)
        })

    }
    catch(err){
        console.log(err);
    }
})

router.get("/",(req,res)=>{
    Product.find().exec()
    .then(result=>{
        res.status(200).json({
            all_user:result
        })
    })
})

router.delete("/:id",(req,res,next)=>{
    try{
        Product.remove({id:req.params.id})
        .then(result=>{
            res.status(200).json({
                Deleted_user:result
            })
        })
        .catch(err=>{
            console.log(err)
        })
          
    

    }
    catch(err){
        console.log(err)
    }
})

router.put("/:id",(req,res,next)=>{
    try{
        console.log(req.params.id)
        Product.findOneAndUpdate({id:req.params.id},{
            $set:{
                productname:req.body.productname,
                price:req.body.price

            }
        })
        .then(result=>{
            res.status(200).json({
                Updated_user:result
            })
        })
        .catch(err=>{
            console.log(err)
        })

    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;