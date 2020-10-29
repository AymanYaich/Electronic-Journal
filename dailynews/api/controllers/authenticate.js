let passport = require ('passport');
let mongoose = require ('mongoose');
//let User = require ('../models/user.js');
let User = mongoose.model('User')

module.exports.register = (req,res)=>{

   let user = new User;
     user.firstName = req.body.firstName;
     user.lastName = req.body.lastName;
     user.city = req.body.city;
     user.email = req.body.email;
     user.setPassword(req.body.password); 
     user.save((err)=>{
        let token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token":token
        })
     })  

};

module.exports.login=(req,res)=>{
         passport.authenticate('local',(err,user,info)=>{
             let token;
             if(err){
                 res.status(404).json(err)
                 return;
             }
             if (user){
                 token=user.generateJwt();
                 res.status(200).json({"token":token})
             }else {
                 res.status(404).json(info)
             }
         })(req,res)
};