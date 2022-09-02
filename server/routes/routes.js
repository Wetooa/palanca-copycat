const express = require("express");
const router = express.Router();
const { getPalanca, sendPalanca } = require("../controllers/controllers");

router.route("/palanca").get(getPalanca);
router.route("/palanca/:id").post(sendPalanca);

module.exports = router;
