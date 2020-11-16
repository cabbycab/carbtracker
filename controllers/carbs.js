const Carb = require("../models/carb");

module.exports = {
    index
}

function index(req, res) {
    res.render('index');
}