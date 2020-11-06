let express= require ("express");
let route=express.Router();
let User = require("../models/user");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken")
let cors=require("cors");
let secret="hello Tokken"

route.use(cors());

// route.post("/sendLogin",(req,res)=>{
//     User.findOne({email:req.body.email}).then((user)=>{
//         if (!user){
//             res.status(404).json({
//                 msg:"Email does not exist",
//                 success:false
//             })
//         }else {
//             bcrypt.compare(req.body.password,user.password).then((isMatch)=>{
//                 if(isMatch){
//                    const payload={
//                        _id:user._id,
//                        email:user.email,
//                        };
                   
//                        jwt.sign(payload,{expiresInMinutes: 60*5},(err,token)=>{
//                            if(err){
                              
//                                throw new Error ('JWT does not work')
//                            }else {    
//                                console.log('token',token)
//                                res.status(201).json({
//                                    token:token,
//                                   msg:"YOU ARE LOGGED"
//                                })
//                            }
//                        })
//                 }else{
//                     res.status(404).json({
//                         msg:"wrong password",
//                         succes:false
//                     })
//                 }
//             })
//         }
//     })
// })
route.post("/sendLogin",(req,res)=>{
    User.findOne({email:req.body.email}).then((user)=>{
        if (!user){
            res.status(404).json({
                msg:"Email does not exist",
                success:false
            })
        }else {
            bcrypt.compare(req.body.password,user.password).then((isMatch)=>{
                if(isMatch){
                   const payload={
                       _id:user._id,
                       email:user.email,
                       };
                   
                     let token=  jwt.sign(payload,secret)
                           
                               
                           
                               res.status(201).json({
                                   token:token,
                                  msg:payload
                               })
                               console.log('token',token)
                       
                }
                else{
                    res.status(404).json({
                        msg:"wrong password",
                        succes:false
                    })
                }
            })
        }
    })
})
route.get("/profiles/:id",(req,res)=>{
    User.findById(req.params.id,(error,data)=>{
        
        if(error){
            console.log("Error",error)
            
        }else {
           
            res.status(201).json({
                msg:data
            })
            console.log(data)
        }
       
})
});
route.get('/users',(req,res)=>{
    User.find({},(error,data)=>{
        if(error){
            console.log(error)
        }else {
            res.status(200).json(data)
        }
    })
})

//  if(error){
            
//             return next(error)
//         }else {
           
//             res.status(201).json({
//                 msg: data
//             })
//         }
//     }

module.exports=route;