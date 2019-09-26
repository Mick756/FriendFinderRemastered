// Libraries
const express  = require('express');
const path = require("path");
const Mongo = require('./util/mongo');
const mongoose = require('mongoose');
const Auth = require("./util/API");

Mongo.connect();

// Variables
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("./client/build"));


// Routes
require('./routes/auth-routes')(app);

app.get("*", (req, res) => {
    res.sendFile("index.html");
});

// DB Connect
mongoose.connection.on('open', async () => {
    let loggedIn = await Auth.login("1", "123");
    console.log(loggedIn);
});

// Listen
app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});