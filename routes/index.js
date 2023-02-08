const express = require("express");
const router = express.Router();

// login
router.get("/", (req, res) => {
  res.send("login");
});

//dashboard
router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;
