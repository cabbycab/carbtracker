const express = require("express")

const router = express.Router();

const indexCtrl = require("../controllers/index");


router.get("/", indexCtrl.index);

router.get("/", function (req, res) {
    res.render("index");
});


module.exports = router;