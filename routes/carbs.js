// require express
const express = require('express');

// create the router object
const router = express.Router();

// require the controller
const carbsCtrl = require('../controllers/carbs');

router.get('/', carbsCtrl.index);

router.get("/new", carbsCtrl.new);

router.delete("/:id", carbsCtrl.delete);

router.put("/:id", carbsCtrl.update);

router.post("/", carbsCtrl.create);

router.get("/:id/edit", carbsCtrl.edit);


module.exports = router;