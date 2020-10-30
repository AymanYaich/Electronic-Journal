let mongoose = require ('mongoose');

let interNewsSchema = new mongoose.Schema({

    image:{type:String},
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


let InterNews = mongoose.model("InterNews",interNewsSchema);

module.exports=InterNews;