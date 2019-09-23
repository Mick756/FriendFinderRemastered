// Libraries
const express  = require('express');
const path = require("path");


// Variables
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.static("./client/build"));


// Routes
app.get("*", (req, res) => {
    res.sendFile("index.html");
});


// Listen
app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});