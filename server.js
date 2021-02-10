const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const port = process.env.PORT || "3000";
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

const indexRouter = require("./routes/index");
const carbsRouter = require("./routes/carbs");

require("dotenv").config();
require("./config/database");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", indexRouter);
app.use("/carbs", carbsRouter);

app.listen(port, function () {
  console.log(`Express is listening on port: ${port}`);
});

// const firebase = require("firebase/app");
// require("firebase/auth");
