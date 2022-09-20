"use strict";

/**
 * @author Gaurish Sethia
 * @description This is a middleware example for expressjs
 * @see https://expressjs.com/en/guide/using-middleware.html
 */
// Import the express module
const express = require("express");
var port = process.env.PORT || 3000;

// Create an express application
const app = express();

// Create a middleware
const middleware = (req, res, next) => {
  console.log("Middleware called");
  next();
};

// Apply the middleware to all requests
app.use(middleware);

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
