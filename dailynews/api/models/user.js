let mongoose = require ('mongoose');
//let bcrypt = require ('bcryptjs');
let jwt = require ('jsonwebtoken');
let crypto = require ('crypto');

let userSchema = new mongoose.Schema({

     firstName:String,
     lastName:String,
     city:String,
     email:{
         type:String,
         unique:true
     },
   hash:String,
   salt:String,
});

userSchema.methods.setPassword = (password) =>{
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex')
};
userSchema.methods.validPassword = (password)=>{
    let hash=crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');
    return this.hash===hash;
}
userSchema.methods.generateJwt = ()=>{
    return jwt.sign(

        {
        _id:this._id,
        email:this.email,
        firstName:this.firstName,
        lastName:this.lastName,
        
        },"Stack",
        {
        expiresIn:"2h"
        }, 
        "MY_SERCRET"

     );
    
}
// userSchema.pre('save',()=>{
//     let user = this;
//     if (!user.isModified('password')){
//       return next();
//     }else {
//       bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
//         if (err){
//           return next (err)
//         }else {
//           bcrypt.hash(user.password,salt,(err,hash)=>{
//             if (err){
//               return next(err)
//             }else {
//               user.password= hash;
//               next()
//             }
//           })
//         }
//       })
//     }
//   })
  

let User =  mongoose.model('User',userSchema);

module.exports = User;


