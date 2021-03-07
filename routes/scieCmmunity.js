const express = require("express")
const router=express.Router()
const ScieCommunity=require("../models/ScieCommunity")


//http://localhost:5000/Mars/user/scientists/:id/
// @message to forum 

router.post("/user/scientists/",(req ,res)=>{
    const {username , newmessage,newtype,newdate,newregion , newacctype} = req.body;

    newmessagebd = new ScieCommunity({user : username , message : newmessage,type:newtype ,date:newdate,regionm:newregion,acctypem:newacctype});

    newmessagebd.save().then((cust) => res.json(cust)).catch(error => res.sendStatus(400))

})

router.get("/user/scientists",(req,res)=>{
    ScieCommunity.find()
    .then((data)=>{
        res.send(data);
      })
     .catch((err)=>{
       console.log(err);
     })
})

module.exports = router