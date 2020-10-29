let express = require("express");
let route = express.Router();
let InterNews = require("../models/interNews.js");
let multer = require("multer");
let pathUpload = "../../public/uploads";
let path = require('path');
let cors = require('cors')
route.use(cors())

route.post("/creates",(req,res)=>{
    let interNews={
        image:req.body.image,
        title:req.body.title,
        text:req.body.text
    };
   InterNews.create(interNews).then((addedNews)=>{
      console.log('g',interNews)
   });

});

route.get("/creates",(req,res)=>{
    InterNews.find({},(err,news)=>{
        if (err){
            res.json(`Can't finf the data`)
        }else {
            res.status(200).json(news);
            console.log(news)
        }
    })
})

/* Multer : upload files*/
//route.use(multer)


let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,pathUpload)
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
});

let upload = multer({
    storage:storage
});

route.post("/create",upload.single("image"),(req,res)=>{
    
    let file = req.file;
    if(!file){
        console.log(`No image is now available`);
        return res.send({
            success:false
        })
    }else {
        console.log('yessssss')
        let interNews = {
            image:file,
            title:req.body.title,
            text:req.body.text
        }
        InterNews.create(interNews).then((data)=>{
            console.log(data)
        })
    }
})
/*Endpoint*/

/** End of Multer : upload file*/

module.exports = route;
