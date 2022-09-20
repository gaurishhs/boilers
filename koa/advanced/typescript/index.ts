/**
 * @author Gaurish Sethia
 * @description Koa advanced typescript example
 */

// Importing Koa and Koa-Router
import Koa from 'koa';
import router from 'koa-router';
import { RateLimit } from 'koa2-ratelimit';
var port = process.env.PORT || 3000;

// Create Koa Application
const app = new Koa();

// Create Koa Router
const koaRouter = new router();

const limiter = RateLimit.middleware({
    interval: { min: 15 },
    max: 100,
    message: "Too many requests, please try again later.",
    prefixKey: "rateLimit",
    headers: true,
});

// Add middleware
app.use(limiter);

// Add routes
koaRouter.get('/', (ctx) => {
    ctx.body = 'Hello World';
});

// Error Handling
koaRouter.get("/error", (ctx) => {
    throw new Error("Error!");
});

// Parameters
koaRouter.get("/hello/:name", (ctx) => {
    ctx.body = "Hello " + ctx.params.name;
});

// Query Parameters
koaRouter.get("/hello", (ctx) => {
    ctx.body = "Hello " + ctx.query.name;
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
