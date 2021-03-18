const router = require("express").Router();
const User = require('../models/User');
const passport = require('../config/passport');
const Champ = require('../models/Championship');

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
  failureRedirect: "/signup"
}),
  function (req, res) {
    console.log(req.user)
    // console.log(req.user)
    const userInfo = { port: process.env.PORT, user: req.user }
    res.json(userInfo)
    console.log(process.env.PORT)
  }
);

router.get('/api/user', async (req, res) => {

  if (req.user) {
    res.status(200);
    res.send(req.user);
  }
  else {
    res.send(new Error(() => "Not logged in"));
  }
})

router.get('/api/userChamps/:adminId', async (req, res) => {
  const adminId = req.params.adminId;
  console.log(adminId);
  const champs = await Champ.find({ admin: {$in: [adminId]}});
  console.log(champs);
  res.send(champs);
})

router.put('/api/setAdminInChamp/:id', async (req, res) => {
  const id = req.params.id;
  const champ = await Champ.find({});
  const updated = Champ.findOneAndUpdate({champName: champ[0].champName}, {$push : {admin: id}})
  res.send(updated)
})

module.exports = router;