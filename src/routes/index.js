"use strict";

const express = require("express");

const router = express.Router();

router.get("/contact", function (req, res) {
  res.send({ name: "John Smith", phone: "504-123-4567" });
});



router.post;

module.exports = router;

