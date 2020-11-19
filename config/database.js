const mongoose = require("mongoose");

const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on("connected", function () {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

db.on("error", function (error) {
    console.log(`Encountered the following error: ${error.message}`);
});

db.on("disconnected", function () {
    console.log("MongDB is disconnected");
});