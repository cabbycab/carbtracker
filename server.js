// Require our Modules and Delcare our Settings Variables
const express = require("express");
const methodOverride = require('method-override');
const morgan = require('morgan');
const port = 3000;

// Create the Express App
const app = express();

// Configure Server Settings with app.set()
app.set("view engine", "ejs");

// Mount our Middleware with app.use()
app.use(methodOverride('_method'));

// Mount our Routes
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false })); 
app.get("/", function(req, res) {
    res.render("index");
});

// All Routes Pertaining to /skills/*

// Tell the App to Listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});