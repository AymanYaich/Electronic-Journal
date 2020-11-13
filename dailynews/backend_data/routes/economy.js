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
route.delete("/delete/",(req,res)=>{

    EconomyNews.findOneAndRemove({title:req.query.title},(err, news) => {
        if (err) {
        res.json("can not find or remove this newsn");
        }
        else {
          res.status(201).json(news);
        }
    })
})
route.put("/edit/",(req,res)=>{
    EconomyNews.findOneAndUpdate({_id:req.query._id},req.body,(err,res)=>{
        if(err){
            console.log('Erroroo')
        }else{
            res.status(200).json(res)
        }
    })
})

module.exports=route;