let express = require("express");
let route = express.Router();
let EconomyNews = require("../models/economyNews");
let multer = require("multer");
let pathUpload = "../../public/uploads";
let path = require('path');
let cors = require('cors')
route.use(cors())

route.post("/creates",(req,res)=>{
    let economyNews={
        image:req.body.image,
        title:req.body.title,
        text:req.body.text
    };
   EconomyNews.create(economyNews).then((addedNews)=>{
      console.log('g',addedNews)
   });

});
route.get("/creates",(req,res)=>{
  EconomyNews.find({},(err,news)=>{
      if (err){
          res.json(`Can't find the data`)
      }else {
          res.status(200).json(news);
          
      }
  })
})

module.exports=route;