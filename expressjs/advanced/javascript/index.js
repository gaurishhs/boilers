"use strict";

const router = require('./router/example-router');
const exampleMiddleware = require('./middlewares/example-middleware');
/**
 * @author Gaurish Sethia
 * @description This is an advanced example for expressjs
 * @see https://expressjs.com/en/guide/routing.html
 * @see https://expressjs.com/en/guide/error-handling.html
 * @see https://expressjs.com/en/guide/writing-middleware.html
 * @see https://expressjs.com/en/guide/behind-proxies.html
 * @see https://expressjs.com/en/guide/debugging.html
 */

// Import the express module
const express = require("express");
var port = process.env.PORT || 3000;

// Create an express application
const app = express();

// Use Router
app.use(router);

// Use Middleware
app.use(exampleMiddleware)

// Define a route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Error Handling
app.get("/error", (req, res) => {
    throw new Error("Error!");
});

// Parameters
app.get("/hello/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

// Query Parameters
app.get("/hello", (req, res) => {
    res.send("Hello " + req.query.name);
});

// Start The Server
app.listen(port, () => {
    console.log("Server started on port " + port);
});


