let express = require("express");
let route = express.Router();
let cors = require("cors");
let User = require("../models/user.js");
let bcrypt = require("bcryptjs");
route.use(cors());

route.post("/creates", (req, res) => {
  let password = req.body.password;

  let saltRound = 10;
  
bcrypt.genSalt(saltRound).then((newSalt)=>{
    bcrypt.hash(password,newSalt).then((hashedPassword)=>{

        let newUser={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            city:req.body.city,
            email:req.body.email,
            salt:newSalt,
            password:hashedPassword
        };
        User.create(newUser).then((user)=>{
            res.status(201).json(user)
        })
    })
})

});
  

module.exports=route;