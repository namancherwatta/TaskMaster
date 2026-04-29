const router = require("express").Router();
const ctrl = require("../controllers/projectController");
const auth = require("../middleware/auth");

router.post("/", auth, ctrl.createProject);


module.exports = router;
