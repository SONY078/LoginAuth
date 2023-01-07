const express= require("express");
const { route } = require('express/lib/application');
var html_to_pdf = require('html-pdf');


const User=require('./modules/user');


const router=express.Router();

// app.get("/", function (req, res) {
//     res.render("home");
// });

router.post("/",function(req,res,next){
    console.log(req.body);

    const user=new User({
        name:req.body.name,
        address:req.body.address

    })

    user.save().then(data=>{
        res.send("Data received")


    }).catch(err=>{
        res.send("Error saving the user"+err)
    })



})


router.get("/",async function(req,res){

    let data=await User.find();

    res.json(data);
    




})

router.put("/:id",async function(req,res){

    let id=req.params.id;

    try {
        let data=await User.updateOne({_id:id},{$set:{name:req.body.name,email:req.body.email,password:req.body.password}})

        res.json(data);
        
        
    } catch (error) {
        res.json({
            error:err
        });
    }

 




})

router.delete("/:id",async function(req,res){

    let id=req.params.id;

    try {
        let data=await User.deleteOne({_id:id})

        res.json(data);
        
        
    } catch (error) {
        res.json({
            error:err
        });
    }

 




})

module.exports=router;