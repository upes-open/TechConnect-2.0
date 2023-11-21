const User = require('../user'); // Assuming 'user' is the name of the model file
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const result = await bcrypt.compare(password, user.password);

        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password' });
        }
      } catch (err) {
        return done(err);
      }
    })
  );




  passport.serializeUser((user, cb) => {
    cb(null, user.id); // Serialize the user's ID
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      cb(err, user);
    });
  });
};
