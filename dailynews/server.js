let express = require ('express');
let bodyParser =  require ('body-parser');
let mongoose = require ('mongoose');
let multer = require ('multer')
let port = process.env.PORT || 3000;
let nationalNews= require('../dailynews/backend_data/routes/national')
let interNews = require ('../dailynews/backend_data/routes/international.js')
let sportNews = require ('../dailynews/backend_data/routes/sportNews');
let cors = require('cors');
let bcryptjs = require ('bcryptjs');
let jwt = require ('jsonwebtoken');
let path =  require ('path');
let logger = require ('morgan');
let cookieParser = require ('cookie-parser');
let favicon = require ('serve-favicon')
let routesApi = require('./api/routes/routes.js')
let passport = require ('passport');
let InterNews = require ('../dailynews/backend_data/models/interNews.js')

let SportNews = require ('../dailynews/backend_data/models/sportNews')
//let db =  require ('./api/models/db.js');
//let config = require ('./api/config/passport.js')
let router=express.Router()
let app =  express();
app.use(cors());
let fileupload = require("express-fileupload"); 
app.use(fileupload())
/**MongoDb connection */
mongoose.connect('mongodb://localhost/dailynews', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("DATA BASE dailynews is  CONNECTED :))");
});
mongoose.set('useCreateIndex', true)
module.exports = db;
/** */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(passport.initialize());
//app.use('/api', routesApi);

//app.use(favicon())
app.use("/international",interNews)
app.use("/national",nationalNews)
app.use("/sport",sportNews)


// app.use(function (err, req, res, next) {
//     if (err.name === 'UnauthorizedError') {
//       res.status(401);
//       res.json({"message" : err.name + ": " + err.message});
//     }
//   });


app.get('/',(req,res)=>{
    res.send(`<center>
    <div>
    
    <h1 style="color:red";>Hello in your server</h1>
                
                <img  style=" border-radius: 70%;
                               width:20%" 
                src ="https://blog.k.io/attachment/a41a4460-1afe-41d2-9746-368bb0f3fa67/thumb1400.jpg"/>
                </div>
                </center>`)
})
app.listen(port,(err)=>{
    if (err){
        throw Erroe
    } else {
   console.log(`Welcome ,You are listening @ port ${port} !!!!`)
}
})




  

module.exports=app;