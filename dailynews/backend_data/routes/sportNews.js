let express = require("express");
let route = express.Router();
let SportNews = require("../models/sportNews");
let multer = require("multer");
let pathUpload = "../../public/uploads";
let path = require('path');
let cors = require('cors')
route.use(cors())

// route.post("/creates",(req,res)=>{
//     let sportNews={
//         image:req.body.image,
//         title:req.body.title,
//         text:req.body.text
//     };
//    SportNews.create(sportNews).then((addedNews)=>{
//       console.log('g',addedNews)
//    });

// });

route.get("/creates",(req,res)=>{
    SportNews.find({},(err,news)=>{
        if (err){
            res.json(`Can't find the data`)
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

route.post("/creates",upload.single("image"),async(req,res)=>{
    
   
        let sportNews = {
            image:req.files,
            title:req.body.title,
            text:req.body.text
        }
      await  SportNews.create(sportNews).then(()=>{
            console.log('hello rrrServer',req.files)
        })
    })


module.exports=route;