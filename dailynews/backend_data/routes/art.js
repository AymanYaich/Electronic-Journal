let express = require("express");
let route = express.Router();
let ArtNews = require("../models/artNews");
let multer = require("multer");
let pathUpload = "../../public/uploads";
let path = require('path');
let cors = require('cors')
route.use(cors())

route.post("/creates",(req,res)=>{
    let artNews={
        image:req.body.image,
        title:req.body.title,
        text:req.body.text
    };
   ArtNews.create(artNews).then((addedNews)=>{
      console.log('g',addedNews)
   });

});
route.get("/creates",(req,res)=>{
  ArtNews.find({},(err,news)=>{
      if (err){
          res.json(`Can't find the data`)
      }else {
          res.status(200).json(news);
          console.log(news)
      }
  })
})

module.exports=route;