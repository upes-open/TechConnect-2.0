var express = require("express");
var router = express.Router();
var User = require("./user");

module.exports = function (passport) {
  router.post("/register", function (req, res) {
    var { body } = req,
      { username, password } = body;

    User.findOne({ username: username })
      .then((doc) => {
        if (doc) {
          console.log("User already exists");
          res.status(500).send("Username already exists");
        } else {
          var record = new User();
          record.username = username;
          record.password = record.hashPassword(password);

          record
            .save()
            .then((user) => {
              console.log("User registered");
              res.send(user);
            })
            .catch((err) => {
              console.log("Error");
              res.status(500).send("Database error");
            });
        }
      })
      .catch((err) => {
        res.status(500).send("Error occurred");
      });
  });

//   router.post(
//     "/login",
//     passport.authenticate("local", {
//       failureRedirect: "/login",
//       //add protected view
//     }),
//     function (req, res) {
//       // console.log(req.body.username)
//       res.redirect('/chapters' + req.body);
//     }
//   );



  router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.send("hey");
  });

  return router;
};
