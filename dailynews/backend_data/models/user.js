let mongoose = require ('mongoose');

let UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    city :String,
    email:String,
    password:String,
    salt:String,
    created_at    : {
        type: Date,
         required: true, 
         default: Date.now
        },
    role:{
        type:Number,
        default:2
    }   
});

let User = mongoose.model('User',UserSchema);
module.exports=User;