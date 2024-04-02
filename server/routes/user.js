// dependencies
var mongoose = require('mongoose');
var bcrypt =require('bcrypt');
 
// const user = new mongoose.Schema({
//   username: String,
//   password: String
// });

// module.exports = mongoose.model('User', user);

var schema=mongoose.Schema;

var userSchema = new schema({
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
})

userSchema.methods.hashPassword=function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword=function(password,hash){
  return bcrypt.compareSync(password,hash)
}

module.exports = mongoose.model('User', userSchema,'users');

