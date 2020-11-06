let mongoose = require ('mongoose');

let CitiesSchema = new mongoose.Schema({
    id:Number,
    name:String,
    photo:String,
    advertise:String
});

let Cities = mongoose.model('Cities',CitiesSchema);
module.exports=Cities;