"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = require("./src/routes");
const { notFound, errorHander, logger } = require("./src/middleware");

const PORT = process.env.PORT || 3015;
require("dotenv").config();

// Middleware
app.use(bodyParser.json()); // always on top by imports

// Routes
app.use(router);

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHander);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); // always on bottom.
