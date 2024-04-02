const passport = require('passport');
const user = require('../server/routes/user');
const bcrypt = require("bcrypt");
var LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy(async function (username, password,done){
    try{
        const doc=await user.findOne({username:username}).exec();
        if (doc){
            const valid=bcrypt.compare(password,doc.password);

            if(valid){
                done(null,{
                    username:doc.username,
                    password:doc.password
                });console.log("User logged in");
            }else{
                done(null,false);
            }
        }else{
            done(null,false);
        }
    }catch(err){
            done(err);
        }
    }));
    
passport.serializeUser(function (user, done) {
done(null, user)
});

passport.deserializeUser(function (user, done) {
    done(null, user)
});


module.exports = passport;