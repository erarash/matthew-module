const router = require("express").Router();
const controller = require("./controller");

router.route("/prodId::id").get(controller.get);

router.route("/prodId::id/:type/limit=:limit").get(controller.getSort);

module.exports = router;
