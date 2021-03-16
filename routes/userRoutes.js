const router = require("express").Router();
const User = require('../models/User');
const passport = require('../config/passport');

router.post("/signup", (req, res) => {
    console.log("user signup");
    console.log(req.body);
    const { email, password, username } = req.body;
    
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log(err);
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      } else {
        console.log("creating new user");
        const newUser = new User({
          username: username,
          password: password,
          email: email
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          res.json(savedUser);
        });
      }
    });
  });

router.post('/login', passport.authenticate("local", {
    failureRedirect: "/signup"}),
    function(req,res) {
      console.log(req.user)
      // console.log(req.user)
      const userInfo={port:process.env.PORT, user:req.user}
      res.json(userInfo)
      console.log(process.env.PORT)
  }
);

module.exports = router;