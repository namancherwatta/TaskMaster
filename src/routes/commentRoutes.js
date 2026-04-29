const router = require("express").Router();
const ctrl = require("../controllers/commentController");
const auth = require("../middleware/auth");

router.post("/", auth, ctrl.addComment);

module.exports = router;
