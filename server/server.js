// const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
// const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const cookieParser=require("cookie-parser");
const bcrypt=require("bcrypt");
// const session=require("express-session");
const bodyParser=require("body-parser");
const User=require('./routes/user')
var path = require('path');
const app=express();


var passport=require("passport");
var mongoose=require("mongoose");
var session=require("express-session");

mongoose.connect("mongodb+srv://agrimajain223:agrimajain123@cluster0.sficaga.mongodb.net/test",
  {useNewUrlParser:true,
  useUnifiedTopology:true,
},
).then(() => {
  console.log("Mongoose is connected");
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});


// //middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true
}))
app.use(session({
  secret:"secretcode",
  // resave:true,
  resave:false,
  saveUninitialized:true
}));

app.use(cookieParser("Secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require('./passportconfig');

var index=require('./routes/index');
var users=require('./routes/user');
var auth=require('./routes/auth')(passport);


app.use('/',index);
app.use('/users',users);
app.use('/auth',auth);


//start server
app.listen(4000,()=>{
  console.log("Server has started")
})


