"use strict";

/**
 * @author Gaurish Sethia
 * @description This is a basic example for expressjs
 */
// Import the express module
const express = require("express");
var port = process.env.PORT || 3000;

// Create an express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Parameters
app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
})

// Query Parameters
app.get("/hello", (req, res) => {
  res.send("Hello " + req.query.name);
})

// Start the server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
