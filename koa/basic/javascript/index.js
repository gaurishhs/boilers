"use strict";

/**
 * @author Gaurish Sethia
 * @description This is a basic example for koa
 * @see https://koajs.com/
 */
// Import the koa module
const Koa = require("koa");
var port = process.env.PORT || 3000;
const app = new Koa();

// Define a route
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "Hello World";
});

// Parameters
app.use(async (ctx, next) => {
    if (ctx.request.path === "/hello/:name") {
        await next();
        ctx.response.type = "text/html";
        ctx.response.body = "Hello " + ctx.params.name;
    }
});

// Query Parameters
app.use(async (ctx, next) => {
    if (ctx.request.path === "/hello") {
        await next();
        ctx.response.type = "text/html";
        ctx.response.body = "Hello " + ctx.query.name;
    }
});

// Start the server
app.listen(port, () => {
    console.log("Server started on port " + port);
});