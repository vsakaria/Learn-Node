const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const { name, age, cool } = req.query;
  const response = { name, age, cool };
  res.json(response);
});

router.get("/reverse/:name", (req, res) => {
  const { name } = req.params;
  const response = [...name].reverse().join("");
  res.json(response);
});

module.exports = router;
