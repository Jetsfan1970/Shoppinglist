const express = require("express");
const morgan = require("morgan");

const itemsRoutes = require("./itemsRoutes");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/items", itemsRoutes);

app.listen(3000, function () {
  console.log("App on port 3000");
});
