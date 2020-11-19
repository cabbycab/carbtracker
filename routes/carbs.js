const express = require("express");
const router = express.Router();
const carbsCtrl = require("../controllers/carbs");


router.get("/", carbsCtrl.index);

router.get("/new", carbsCtrl.new);

router.delete("/:id", carbsCtrl.delete);

router.put("/:id", carbsCtrl.update);

router.post("/", carbsCtrl.create);

router.get("/:id/edit", carbsCtrl.edit);

router.get("/", carbsCtrl.index);


module.exports = router;