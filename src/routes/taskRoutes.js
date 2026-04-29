const router = require("express").Router();
const ctrl = require("../controllers/taskController");
const auth = require("../middleware/auth");

router.post("/", auth, ctrl.createTask);
router.get("/", auth, ctrl.getTasks);

module.exports = router;
