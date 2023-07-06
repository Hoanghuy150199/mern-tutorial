const express = require("express");
const router = express.Router();
const controller = require("../controllers/goalController");

router.route("/").get(controller.getGoals).post(controller.setGoal);
router.route("/:id").put(controller.updateGoal).delete(controller.deleteGoal);

module.exports = router;
