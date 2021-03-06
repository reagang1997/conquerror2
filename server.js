// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require('./config/passport');
const mongoose = require("mongoose");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8081;


// Creating express app and configuring middleware needed for authentication
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") { 
    app.use(express.static("client/build")); 
}
else {
    app.use(express.static("public"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});



// routes
app.use(require('./routes/userRoutes.js'));
app.use(require('./routes/playerRoutes.js'));
app.use(require('./routes/champRoutes.js'));
app.use(require('./routes/statRoutes.js'));
app.use(require('./routes/teamRoutes.js'));



// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
