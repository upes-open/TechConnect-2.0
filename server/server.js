const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const passport=require("passport");
const passportlLocal=require("passport-local").Strategy;
const cookieParser=require("cookie-parser");
const bcrypt=require("bcrypt");
const session=require("express-session");
const bodyParser=require("body-parser");
const User=require('./user')
const app=express();

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
  resave:true,
  saveUninitialized:true
}));

app.use(cookieParser("Secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require('./routes/passportconfig')(passport);


//routes
app.post("/login",(req,res,next)=>{
  passport.authenticate("local",(err,user,info)=>{
    if(err)throw err;
    if(!user) res.send("No user exists");
    else{
      req.login(user,err=>{
        if (err) throw err;
        if (!user) res.send("Successfully Authenticated");
        console.log(req.user);
       } )
    }
  })(req,res,next);
})



app.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({ error: "User Already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(req.body.password, 5); // Using async/await for bcrypt
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });
    
    await newUser.save();
    return res.status(200).json({ message: "User created" });
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//start server
app.listen(4000,()=>{
  console.log("Server has started")
})
