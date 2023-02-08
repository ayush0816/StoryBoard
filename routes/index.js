const express = require("express");
const router = express.Router();

// login
router.get("/", (req, res) => {
  res.render("login");
});

//dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
