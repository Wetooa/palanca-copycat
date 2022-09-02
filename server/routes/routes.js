const express = require("express");
const router = express.Router();
const {
  getPalanca,
  sendPalanca,
  login,
} = require("../controllers/controllers");

router.route("/palanca").get(getPalanca);
router.route("/palanca/:id").post(sendPalanca);
router.route("/login").post(login);

module.exports = router;
