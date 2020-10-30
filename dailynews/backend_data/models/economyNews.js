let mongoose = require ('mongoose');

let economyNewsSchema = new mongoose.Schema({

    image:String,
    title:String,
    text:String,
    category:{
        type:String,
        default:"Economy"
    },
    created_at    : {
         type: Date,
          required: true, 
          default: Date.now
         }
   

})


let EconomyNews = mongoose.model("EconomyNews",economyNewsSchema);

module.exports = EconomyNews;