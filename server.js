// Require our Modules and Delcare our Settings Variables
const express = require("express");
const methodOverride = require('method-override');
const morgan = require('morgan');
const port = 3000;

// Create the Express App
const app = express();

// Require our Router Modules:
const indexRouter = require('./routes/index');
const carbsRouter = require("./routes/carbs");

// Configure Server Settings with app.set()
app.set("view engine", "ejs");

// Mount our Middleware with app.use()
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false })); 
app.use('/', indexRouter);
app.use("/carbs", carbsRouter);

app.get("/", function(req, res) {
    res.render("index");
});

// Tell the App to Listen
app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});