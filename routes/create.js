// Enable support for Express apps.
const express = require("express");
const router = express.Router();

var renderer = require("../src/renderer.js");

// Wrap the campaign request in an async function.
const create = async function (req, res) {
  // Notify the server admin that a campaign has been requested.
  req.app.debug.server(`Create page requested from ` + req.ip);

  // Render HTML
  renderer.view("create.html", res);
  res.end();

  // Notify the server admin that a campaign has been requested.
  req.app.debug.server(`Create page delivered to ` + req.ip);
};

// Call create when this route is requested.
router.get("/", create);

module.exports = router;
