"use strict";

/**
 * @author Gaurish Sethia
 * @description This is an advanced example for koa
 * @see https://koajs.com/
 */

// Import the koa module
const Koa = require("koa");
var port = process.env.PORT || 3000;

// Import the koa-router module
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const exampleMiddleware = require('./middlewares/example-middleware');

// Ratelimiting
const ratelimit = require("koa2-ratelimit").RateLimit;

// Initialize Ratelimiter
const limiter = ratelimit.middleware({
    interval: { min: 15 },
    max: 100,
    message: "Too many requests, please try again later.",
    prefixKey: "rateLimit",
    headers: {
        remaining: "Rate-Limit-Remaining",
        reset: "Rate-Limit-Reset",
        total: "Rate-Limit-Total"
    }
});

// Apply to all requests
app.use(limiter);

// Use Middleware
app.use(exampleMiddleware)

// Define a route
router.get("/", async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "Hello World";
});

// Parameters
router.get("/hello/:name", async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "Hello " + ctx.params.name;
});

// Query Parameters
router.get("/hello", async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "Hello " + ctx.query.name;
});

// Use the router
app.use(router.routes());

// Start the server
app.listen(port, () => {
    console.log("Server started on port " + port);
});