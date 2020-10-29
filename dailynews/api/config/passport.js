let mongoose = require ('mongoose');
let User = require ('../models/user.js');
let passport =  require ('passport');
let LocalStrategy = require ('passport').Strategy;

passport.use(new LocalStrategy((email,password,done)=>{
   User.findOne({email:email},(err,user)=>{
       if (err){
           return done(err)
       } 
       if (!user){
           return done(null,false,{message:"Incorrect email"})
       }if (!user.validePassword(password)){
           return done(null, false, { message: 'Incorrect password.' })
       }
       return done (null, user)
   })
}
))
