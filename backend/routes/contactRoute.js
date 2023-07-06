const express = require("express");
const { submitContact } = require("../controllers/contactController");

const router = express.Router();

router.route("/contact").post(submitContact);

module.exports = router;
