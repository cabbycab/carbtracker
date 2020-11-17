const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const port = 3000;

const app = express();

const indexRouter = require("./routes/index");
const carbsRouter = require("./routes/carbs");

app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false })); 

app.use("/", indexRouter);
app.use("/carbs", carbsRouter);

app.get("/", function(req, res) {
    res.render("index");
});

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});