let express = require("express");
let route = express.Router();
let SportNews = require("../models/sportNews");
let multer = require("multer");
let pathUpload = "../../public/uploads";
let path = require('path');
let cors = require('cors')
route.use(cors())

route.post("/creates",(req,res)=>{
    let sportNews={
        image:req.body.image,
        title:req.body.title,
        text:req.body.text
    };
   SportNews.create(sportNews).then((addedNews)=>{
      console.log('g',addedNews)
   });

});
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

// const storage = multer.diskStorage({
//     destination: pathUpload,
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     },
//   });
  
//   const fileFilter = (req, file, cb) => {
//     console.log("file", file.mimetype);
//     if (
//       file.mimetype == "image/jpeg" ||
//       file.mimetype == "image/png" ||
//       file.mimetype === "image/jpg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
//   const upload = multer({ storage: storage, fileFilter: fileFilter });

// route.post("/creates",upload.single("image"),(req,res)=>{
//     const url = req.protocol + '://' + req.get('host');
//     let reqFile=url+pathUpload+req.files.file;
   
//         let sportNews = {
//             image:reqFile,
//             title:req.body.title,
//             text:req.body.text
//         }
//        SportNews.create(sportNews).then(()=>{
//             console.log('hello rrrServer',reqFile)
//         }).catch(err=>{
//           console.log(err)
//         })
//     });

  
  

module.exports=route;