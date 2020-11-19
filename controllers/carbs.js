const Carb = require("../models/carb");

module.exports = {
    index,
    new: newCarb,
    delete: deleteCarb,
    update,
    create,
    edit
};


function index(req, res) {
    Carb.find({}, function (err, carbs) {
        console.log(carbs)
        res.render("carbs/index", {
            carbs
        });
    });
};

function newCarb(req, res) {
    res.render("carbs/new");
};

function deleteCarb(req, res) {
    Carb.findByIdAndDelete(req.params.id, function (err, deletedCarb) {
        res.redirect("/carbs");
    });
};

function update(req, res) {
    Carb.findByIdAndUpdate(req.params.id, req.body, function (err, updatedCarb) {
        res.redirect("/carbs");
    });
};

function create(req, res) {
    Carb.create(req.body, function (err, carb) {
        res.redirect("/carbs")
    })
};

function edit(req, res) {
    Carb.findById(req.params.id, function (err, carb) {
        res.render("carbs/edit", {
            carb
        });
    });
};