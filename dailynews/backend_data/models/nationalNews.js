let mongoose = require ('mongoose');

let nationalNewsSchema = new mongoose.Schema({

    image:String,
    title:String,
    text:String,
    category:{
        type:String,
        default:"International"
    },
    created_at    : {
         type: Date,
          required: true, 
          default: Date.now
         }
   

})


let NationalNews = mongoose.model("NationalNews",nationalNewsSchema);

module.exports=NationalNews;