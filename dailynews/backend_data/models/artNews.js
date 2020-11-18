let mongoose = require ('mongoose');

let artNewsSchema = new mongoose.Schema({

    image:String,
    title:String,
    text:String,
    category:{
        type:String,
        default:"Art"
    },
    created_at    : {
         type: Date,
          required: true, 
          default: Date.now
         },
   
   messages:[Object]
})


let ArtNews = mongoose.model("ArtNews",artNewsSchema);

module.exports = ArtNews;