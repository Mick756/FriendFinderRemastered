// Libraries
const express  = require('express');
const path = require("path");
const Mongo = require("./util/API");

// Variables
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.static("./client/build"));


// Routes
app.get("*", (req, res) => {
    res.sendFile("index.html");
});

Mongo.addUser("Mick Arias", "mick756@gmail.com", "480-888-6952", "1234");

// Listen
app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});