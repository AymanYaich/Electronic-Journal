let mongoose= require('mongoose');

AdvertisingSchema = new mongoose.Schema({
    category:String,
    imageUrl:String
})

let Advertising = mongoose.model('Advertising',AdvertisingSchema);
module.exports = Advertising