const express = require("express");
const items = require("./fakeDB");

const router = express.Router();

router.get("/", function (req, res) {
  res.json(items);
});

router.post("/", function (req, res) {
  const newItem = { name: req.body.name, price: req.body.price };
  items.push(newItem);
  res.json({ added: newItem });
});

router.get("/:name", function (req, res) {
  const foundItem = items.find((item) => item.name === req.params.name);
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ error: "Item not found!" });
  }
});

module.exports = router;
