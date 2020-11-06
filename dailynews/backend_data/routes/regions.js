let express = require('express');
let route = express.Router();
let Cities = require ("../models/regions.js");
let cors = require('cors');


route.use(cors());


route.post("/creates",(req,res)=> {
    let newRegion={
        name:req.body.name,
        photo:req.body.photo
    };

    Cities.create(newRegion).then((region)=>{
        console.log(region)
    })
});

route.get("/creates",(req,res)=>{
    Cities.find({},(err,cities)=>{
        if(err){
            console.log('failed to find regions')
        }else{
            res.status(201).json(cities)
        }
    })
});



module.exports=route