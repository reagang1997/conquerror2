// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require('./config/passport');
const mongoose = require("mongoose");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;


// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});



// routes
app.post("/api/signup", function (req, res) {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(function () {
            res.redirect(307, "/api/login");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
});

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
