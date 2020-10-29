let mongoose = require ('mongoose');

let sportNewsSchema = new mongoose.Schema({

    image:String,
    title:String,
    text:String,
    category:{
        type:String,
        default:"Sport"
    },
    created_at    : {
         type: Date,
          required: true, 
          default: Date.now
         }
   

})


let SportNews = mongoose.model("SportNews",sportNewsSchema);

module.exports = SportNews;