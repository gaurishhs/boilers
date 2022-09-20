"use strict";

/**
 * @author Gaurish Sethia
 */
// Import the express module
const express = require("express");
var port = process.env.PORT || 3000;
const rateLimit = require("express-rate-limit");

// Create an express application
const app = express();

// Create a rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Send standard rate limit headers
});

// Apply the rate limiter to all requests
app.use(limiter);

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
