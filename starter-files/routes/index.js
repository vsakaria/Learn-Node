const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const { name, age, cool } = req.query;
  const vishal = { name, age, cool };
  // res.send("Hey! It works!");

  res.json(vishal);
});

module.exports = router;
