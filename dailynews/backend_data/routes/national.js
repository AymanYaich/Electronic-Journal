let express = require("express");
let route = express.Router();
let NationalNews = require("../models/nationalNews");
let multer = require("multer");
let pathUpload = "../../public/uploads";
let path = require('path');
let cors = require('cors')
route.use(cors())

// route.post("/creates",(req,res)=>{
//     let interNews={
//         image:req.body.image,
//         title:req.body.title,
//         text:req.body.text
//     };
//    NationalNews.create(interNews).then((addedNews)=>{
//       console.log('g',interNews)
//    });

// });

route.get("/creates",(req,res)=>{
    NationalNews.find({},(err,news)=>{
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

route.post("/creates",upload.single("image"),(req,res)=>{
    
    
        let interNews = {
            image:req.file.filename,
            title:req.body.title,
            text:req.body.text
        }
        NationalNews.create(interNews).then((data)=>{
            console.log(data)
        })
    
});

module.exports=route;