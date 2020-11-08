let express= require('express');
let route = express.Router();
let Advertise = require('../models/advertising.js')
let cors = require('cors');


route.use(cors());



route.post('/creates',(req,res)=>{
      let newAdvertise={
          imageUrl:req.body.imageUrl
      };

      Advertise.create(newAdvertise).then((err,advertise)=>{
          if(err){
              console.log(err)
          }else{
              res.status(201).json(advertise)
          }
      })
})

module.exports=route